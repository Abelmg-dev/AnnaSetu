// === helpers ===
const $ = (id) => document.getElementById(id);
const toDateKey = (d) => {
  const t = new Date(d); t.setHours(0,0,0,0);
  return t.toISOString().slice(0,10); // YYYY-MM-DD
};
const startOfToday = () => { const d=new Date(); d.setHours(0,0,0,0); return d; };
const daysAgo = (n) => { const d=new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate()-n); return d; };

// === submit log ===
$('btnSubmit').addEventListener('click', async () => {
  const hotelName = $('hotelName').value.trim();
  const stateName = $('stateName').value.trim();
  const meals = parseInt(($('meals').value||'0'), 10);
  const served = parseInt(($('served').value||'0'), 10);
  const foodType = $('foodType').value;

  if (!hotelName || !meals || meals < 0) {
    alert('Please enter a hotel name and a valid meals wasted number.');
    return;
  }

  const now = new Date();
  const doc = {
    hotelName,
    state: stateName || null,
    meals,
    served: isNaN(served) ? null : served,
    foodType,
    createdAt: now,
    dayKey: toDateKey(now) // used for grouping/chart
  };

  try {
    await db.collection('wasteLogs').add(doc);
    alert('Waste logged!');
    // Clear form
    $('meals').value = '';
    $('served').value = '';
    // refresh dashboard
    loadToday();
    loadTrend7();
  } catch (e) {
    console.error(e);
    alert('Failed to log. Check console.');
  }
});

// === demo data quick add (for judges) ===
$('btnDemo').addEventListener('click', async () => {
  const base = [
    { hotelName:'Hotel Ashoka', meals: 35, served: 220, state:'Kerala', foodType:'veg', days:0 },
    { hotelName:'City Mess',    meals: 22, served: 180, state:'Kerala', foodType:'mixed', days:1 },
    { hotelName:'Blue Spice',   meals: 41, served: 240, state:'TN',     foodType:'nonveg', days:2 },
    { hotelName:'Punjabi Zaika',meals: 18, served: 150, state:'Punjab', foodType:'veg',    days:3 },
    { hotelName:'Hotel Amar',   meals: 55, served: 320, state:'MP',     foodType:'mixed',  days:4 },
    { hotelName:'Roti House',   meals: 27, served: 210, state:'GJ',     foodType:'veg',    days:5 },
    { hotelName:'Biriyani Hub', meals: 63, served: 360, state:'KL',     foodType:'nonveg', days:6 },
  ];
  const batch = db.batch();
  base.forEach(row => {
    const d = daysAgo(row.days);
    const ref = db.collection('wasteLogs').doc();
    batch.set(ref, {
      hotelName: row.hotelName,
      meals: row.meals,
      served: row.served,
      state: row.state,
      foodType: row.foodType,
      createdAt: d,
      dayKey: toDateKey(d)
    });
  });
  await batch.commit();
  alert('Demo data added ✅');
  loadToday();
  loadTrend7();
});

// === dashboard: today totals & message ===
async function loadToday(){
    const today = startOfToday();
    const snap = await db.collection('wasteLogs').where('createdAt','>=', today).get();
  
    let totalMeals = 0, servedSum = 0, servedCount = 0;
    snap.forEach(doc => {
      const d = doc.data();
      totalMeals += (d.meals || 0);
      if (typeof d.served === 'number') { servedSum += d.served; servedCount++; }
    });
  
    const avgPct = (servedCount>0 && servedSum>0) ? Math.round((totalMeals / servedSum) * 100) : 0;
  
    // Update dashboard
    $('totalMeals').textContent = totalMeals.toString();
    $('families').textContent   = Math.floor(totalMeals / 4).toString();
    $('pctWasted').textContent  = isFinite(avgPct) ? `${avgPct}%` : '0%';
  
    // Build the message
    const msg = totalMeals === 0
      ? '🇮🇳 Data not logged yet today. Add entries to see the impact.'
      : `📊 AnnaSetu Report — ${new Date().toLocaleDateString()}
  
  ⚠️ India wasted ${totalMeals} meals today.
  That’s enough to feed ${Math.floor(totalMeals/4)} families.
  
  This Independence Day, let’s pledge: #FreedomFromHunger 🇮🇳`;
  
    // Put message in both places (card text + textarea)
    const awarenessEl = $('awarenessMsg');
    if (awarenessEl) awarenessEl.textContent = msg;
  
    const msgBox = $('dailyMsg');
    if (msgBox) msgBox.value = msg;
  }
  

  // Awareness message (national broadcast idea)
  const msg = totalMeals === 0
    ? '🇮🇳 Today’s data is loading… Log some entries to see the impact.'
    : `⚠️ India wasted ${totalMeals} meals today — enough to feed ${Math.floor(totalMeals/4)} families.
       This Independence Day, let’s pledge: #FreedomFromHunger`;
  $('awarenessMsg').textContent = msg;


// === 7-day trend chart ===
let chart;
async function loadTrend7(){
  const start = daysAgo(6); // include today
  const snap = await db.collection('wasteLogs').where('createdAt','>=', start).get();

  // prepare last 7 days keys
  const keys = [];
  for(let i=6;i>=0;i--){
    keys.push(toDateKey(daysAgo(i)));
  }
  const sums = Object.fromEntries(keys.map(k=>[k,0]));

  snap.forEach(doc => {
    const d = doc.data();
    if (d.dayKey && sums.hasOwnProperty(d.dayKey)){
      sums[d.dayKey] += (d.meals || 0);
    }
  });

  const labels = keys.map(k => k.slice(5)); // MM-DD
  const data = keys.map(k => sums[k]);

  if (chart) chart.destroy();
  const ctx = document.getElementById('trendChart').getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{ label: 'Meals Wasted', data, tension: .3 }]
    },
    options: { responsive:true, plugins:{ legend:{ display:false } } }
  });
}

// first load
// Run after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    // Copy button handler
    const copyBtn = $('btnCopy');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = ($('dailyMsg') && $('dailyMsg').value) || '';
        navigator.clipboard.writeText(text).then(() => {
          alert('Message copied! Paste into WhatsApp/SMS for demo.');
        });
      });
    }
  
    // Initial loads
    loadToday();
    loadTrend7();
  });
  
