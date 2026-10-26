// CASCADE-X Dynamic Chart & Table Populator
(function () {
  'use strict';

  function populateBenchmarkTable() {
    const tbody = document.getElementById('benchmark-table-body');
    if (!tbody || !window.CASCADE_DATA || !CASCADE_DATA.experiment_evolution) return;

    tbody.innerHTML = '';
    CASCADE_DATA.experiment_evolution.forEach((exp, idx) => {
      const tr = document.createElement('tr');
      const isTop = idx >= CASCADE_DATA.experiment_evolution.length - 2;

      tr.innerHTML = `
        <td style="font-weight:600;color:${isTop ? 'var(--c-mint)' : 'var(--txt)'}">
          ${exp.id} ${isTop ? '<span class="table-badge highlight">🏆 REKOR</span>' : ''}
        </td>
        <td>${exp.model}</td>
        <td style="font-family:var(--font-mono);font-weight:700;color:var(--c-cyan)">${exp.cv.toFixed(5)}</td>
        <td style="font-family:var(--font-mono);font-weight:700;color:var(--c-mint)">${exp.lb.toFixed(5)}</td>
        <td style="color:var(--txt3);font-size:11px">${exp.date}</td>
        <td style="font-size:12px;color:var(--txt2)">${exp.desc}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function populateMaccTable() {
    const tbody = document.getElementById('macc-table-body');
    if (!tbody || !window.CASCADE_DATA || !CASCADE_DATA.macc_interventions) return;

    tbody.innerHTML = '';
    CASCADE_DATA.macc_interventions.forEach((item) => {
      const tr = document.createElement('tr');
      const isNegative = item.cost_per_ton_usd < 0;

      tr.innerHTML = `
        <td style="font-weight:600">${item.intervention_name}</td>
        <td><span class="table-badge" style="background:rgba(0,210,255,0.1);color:var(--c-cyan)">${item.sector}</span></td>
        <td style="font-family:var(--font-mono);color:${isNegative ? 'var(--c-mint)' : 'var(--txt)'};font-weight:600">
          ${item.cost_per_ton_usd < 0 ? '-' : ''}$${Math.abs(item.cost_per_ton_usd).toFixed(1)} / tCO₂
        </td>
        <td style="font-family:var(--font-mono);font-weight:600">${item.annual_abatement_kt_co2.toFixed(1)} kt</td>
        <td style="font-family:var(--font-mono);color:var(--c-amber)">${item.payback_period_years} Tahun</td>
        <td><span class="table-badge ${isNegative ? 'highlight' : ''}">${item.feasibility_rank}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  function populateZoneRegionSelect() {
    const sel = document.getElementById('zone-region-select');
    if (!sel || !window.CASCADE_DATA || !CASCADE_DATA.zone_regions) return;

    sel.innerHTML = '<option value="">-- Pilih Wilayah Metropolitan (329 Klaster) --</option>';
    CASCADE_DATA.zone_regions.forEach((z) => {
      const opt = document.createElement('option');
      opt.value = z.zone_region_id;
      const eui = typeof z.mean_eui_gas === 'number' ? z.mean_eui_gas.toFixed(1) : '-';
      const bldCount = (z.building_count || 0).toLocaleString('id-ID');
      opt.textContent = `${z.zone_region_id} (${bldCount} Gedung) — Rata-rata EUI: ${eui} kWh/m²`;
      sel.appendChild(opt);
    });

    sel.addEventListener('change', () => {
      const val = sel.value;
      const found = CASCADE_DATA.zone_regions.find((z) => z.zone_region_id === val);
      const resBox = document.getElementById('zone-region-details');
      if (found && resBox) {
        resBox.style.display = 'grid';
        const bldCount = (found.building_count || 0).toLocaleString('id-ID');
        const gas = Math.round(found.mean_macro_gas_kwh || 0).toLocaleString('id-ID') + ' kWh';
        const elec = Math.round(found.mean_macro_elec_kwh || 0).toLocaleString('id-ID') + ' kWh';
        const eui = (found.mean_eui_gas || 0).toFixed(2) + ' kWh/m²';
        const hp = (found.mean_electric_heating_adoption || 0).toFixed(2) + '%';
        const clean = (found.mean_clean_building_ratio || 0).toFixed(2) + '%';

        const elBld = document.getElementById('zone-det-buildings');
        const elGas = document.getElementById('zone-det-gas');
        const elElec = document.getElementById('zone-det-elec');
        const elEui = document.getElementById('zone-det-eui');
        const elHp = document.getElementById('zone-det-hp');
        const elClean = document.getElementById('zone-det-clean');

        if (elBld) elBld.textContent = bldCount;
        if (elGas) elGas.textContent = gas;
        if (elElec) elElec.textContent = elec;
        if (elEui) elEui.textContent = eui;
        if (elHp) elHp.textContent = hp;
        if (elClean) elClean.textContent = clean;
      } else if (resBox) {
        resBox.style.display = 'none';
      }
    });

    // Default select first item
    if (CASCADE_DATA.zone_regions.length > 0) {
      sel.value = CASCADE_DATA.zone_regions[0].zone_region_id;
      sel.dispatchEvent(new Event('change'));
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    populateBenchmarkTable();
    populateMaccTable();
    populateZoneRegionSelect();
  });
})();
