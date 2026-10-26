// CASCADE-X Dynamic Chart & Table Populator
(function () {
  'use strict';

  function getData() {
    return window.CASCADE_DATA || (typeof CASCADE_DATA !== 'undefined' ? CASCADE_DATA : null);
  }

  function populateMaccTable() {
    const tbody = document.getElementById('macc-table-body');
    const data = getData();
    if (!tbody || !data || !data.macc_interventions) return;

    tbody.innerHTML = '';
    data.macc_interventions.forEach((item) => {
      const tr = document.createElement('tr');
      const cost = typeof item.cost_per_ton_usd === 'number'
        ? item.cost_per_ton_usd
        : (typeof item.marginal_abatement_cost_eur_per_tco2 === 'number' ? item.marginal_abatement_cost_eur_per_tco2 : 0);
      const isNegative = cost < 0;
      const abatement = typeof item.annual_abatement_kt_co2 === 'number'
        ? item.annual_abatement_kt_co2
        : (typeof item.abatement_potential_kton_co2 === 'number' ? item.abatement_potential_kton_co2 : 0);
      const name = item.intervention_name || item.intervention || 'Intervensi Dekarbonisasi';
      const sector = item.sector || 'Efisiensi Selubung';
      const payback = item.payback_period_years || '-';
      const rank = item.feasibility_rank || (isNegative ? 'Prioritas #1' : 'Prioritas Bersyarat');

      tr.innerHTML = `
        <td style="font-weight:600;color:var(--text-primary)">${name}</td>
        <td><span class="badge-tag" style="background:rgba(0,210,255,0.1);color:var(--brand-cyan);border:1px solid rgba(0,210,255,0.25)">${sector}</span></td>
        <td style="font-family:'JetBrains Mono';color:${isNegative ? 'var(--color-safe)' : 'var(--text-primary)'};font-weight:700">
          ${isNegative ? '-' : ''}$${Math.abs(cost).toFixed(1)} / tCO₂
        </td>
        <td style="font-family:'JetBrains Mono';font-weight:700;color:var(--brand-cyan)">${abatement.toFixed(1)} kt</td>
        <td style="font-family:'JetBrains Mono';color:var(--color-warning);font-weight:600">${payback} Tahun</td>
        <td><span class="badge-tag ${isNegative ? 'tag-safe' : 'tag-champion'}">${rank}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  function populateZoneRegionSelect() {
    const sel = document.getElementById('zone-region-select');
    const data = getData();
    if (!sel || !data || !data.zone_regions) return;

    sel.innerHTML = '<option value="">-- Pilih Wilayah Metropolitan (329 Klaster) --</option>';
    data.zone_regions.forEach((z) => {
      const opt = document.createElement('option');
      opt.value = z.zone_region_id;
      const eui = typeof z.mean_eui_gas === 'number' ? z.mean_eui_gas.toFixed(1) : '-';
      const bldCount = (z.building_count || 0).toLocaleString('id-ID');
      opt.textContent = `${z.zone_region_id} (${bldCount} Gedung) — Rata-rata EUI: ${eui} kWh/m²`;
      sel.appendChild(opt);
    });

    function updateDetails() {
      const val = sel.value;
      const found = data.zone_regions.find((z) => z.zone_region_id === val);
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
      }
    }

    sel.addEventListener('change', updateDetails);

    // Default select first cluster (REG_001)
    if (data.zone_regions.length > 0) {
      sel.value = data.zone_regions[0].zone_region_id;
      updateDetails();
    }
  }

  function init() {
    populateMaccTable();
    populateZoneRegionSelect();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
