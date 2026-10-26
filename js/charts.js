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

    sel.innerHTML = '<option value="">-- Pilih Zona Wilayah Metropolitan (329 Klaster) --</option>';
    CASCADE_DATA.zone_regions.forEach((z) => {
      const opt = document.createElement('option');
      opt.value = z.zone_region_id;
      opt.textContent = `Zona #${z.zone_region_id} (${z.total_buildings} Bangunan) - Rata-rata EUI: ${z.mean_eui_gas_kwh_sqm.toFixed(1)} kWh/m²`;
      sel.appendChild(opt);
    });

    sel.addEventListener('change', () => {
      const val = parseInt(sel.value);
      const found = CASCADE_DATA.zone_regions.find((z) => z.zone_region_id === val);
      const resBox = document.getElementById('zone-region-details');
      if (found && resBox) {
        resBox.style.display = 'grid';
        document.getElementById('zone-det-buildings').textContent = found.total_buildings.toLocaleString('id-ID');
        document.getElementById('zone-det-gas').textContent = Math.round(found.mean_gas_kwh).toLocaleString('id-ID') + ' kWh';
        document.getElementById('zone-det-elec').textContent = Math.round(found.mean_elec_kwh).toLocaleString('id-ID') + ' kWh';
        document.getElementById('zone-det-eui').textContent = found.mean_eui_gas_kwh_sqm.toFixed(2) + ' kWh/m²';
        document.getElementById('zone-det-hp').textContent = found.mean_heat_pump_adoption.toFixed(2) + '%';
        document.getElementById('zone-det-clean').textContent = found.mean_clean_building_ratio.toFixed(2) + '%';
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
