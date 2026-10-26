// CASCADE-X National Energy Transition Intelligence Data Store
// Source: Official Academic Writeup Paper & Logbook opo yo.xlsx
window.CASCADE_DATA = {
  metadata: {
    team: 'opo yo',
    members: ['Muhammad Habib Nur Aiman', 'Rizki Piji Fathoni'],
    institution: 'Sains Data, Universitas Negeri Surabaya',
    competition: 'DICE FEST 2026 Machine Learning Competition',
    organizer: 'HMPS Sains Data, FST UIN Raden Mas Said Surakarta',
    rank: 'Peringkat #1 Nasional Babak Penyisihan',
    private_lb_score: 0.23438,
    cv_score: 0.25685,
    public_lb_score: 0.25457,
    score_diff: -0.00228,
    total_samples: 429303,
    total_features: 201,
    num_zones: 329,
    exact_identity_r2: 1.000000,
    exact_identity_max_dev: '1.7e-13'
  },
  targets: {
    target_macro_gas_kwh: {
      name: 'Total Konsumsi Gas Fosil Makro',
      code: 'target_macro_gas_kwh',
      unit: 'kWh/tahun',
      sigma: 151750.04,
      nrmse: 0.24840,
      rmse: 37694.76,
      mean: 230372.0,
      min: 4324,
      max: 999765,
      weight: '20%',
      color: '#ff9f43',
      description: 'Konsumsi energi termal gas alam jaringan pipa perkotaan tahunan'
    },
    target_macro_elec_kwh: {
      name: 'Proyeksi Beban Listrik Makro',
      code: 'target_macro_elec_kwh',
      unit: 'kWh/tahun',
      sigma: 41725.37,
      nrmse: 0.31944,
      rmse: 13328.52,
      mean: 63756.0,
      min: 2968,
      max: 396492,
      weight: '20%',
      color: '#00d2ff',
      description: 'Beban konsumsi listrik makro jaringan PLN, berkorelasi +0.887 dengan konsumsi gas'
    },
    target_eui_gas_kwh_per_sqm: {
      name: 'Intensitas Energi Gas per Luas Lantai (EUI)',
      code: 'target_eui_gas_kwh_per_sqm',
      unit: 'kWh/m²',
      sigma: 40.65,
      nrmse: 0.64969,
      rmse: 26.41,
      mean: 139.06,
      min: 5.12,
      max: 648.11,
      weight: '20%',
      color: '#0ea5e9',
      description: 'Indikator intensitas fisik EUI ≡ Gas Makro / GIA (bld_dim_06) dengan korelasi 1.000000'
    },
    target_clean_building_ratio: {
      name: 'Proporsi Bangunan Bersertifikasi Hijau',
      code: 'target_clean_building_ratio',
      unit: '%',
      sigma: 12.49,
      nrmse: 0.01361,
      rmse: 0.17,
      mean: 90.76,
      min: 8.33,
      max: 100.0,
      weight: '20%',
      color: '#00f5a0',
      description: 'Tingkat sertifikasi efisiensi selubung bangunan, komplementer 100 - socio_demog_011'
    },
    target_electric_heating_adoption: {
      name: 'Tingkat Adopsi Pemanas Listrik / Heat Pump',
      code: 'target_electric_heating_adoption',
      unit: '%',
      sigma: 7.18,
      nrmse: 0.05292,
      rmse: 0.38,
      mean: 5.38,
      min: 0.0,
      max: 93.24,
      weight: '20%',
      color: '#10b981',
      description: 'Penetrasi pompa kalor elektrik substitusi boiler gas, dipetakan pada resolusi subzone'
    }
  },
  experiment_evolution: [
    { id: 'Run 1 (Baseline)', cv: 0.28043, lb: 0.28410, model: 'Baseline LightGBM Default', date: '12 Okt 2026', desc: 'Model pohon GBDT dasar tanpa rekayasa fitur termodinamika.' },
    { id: 'Run 2 (Habib Run 2)', cv: 0.28887, lb: 0.27769, model: 'Tri-Model GBDT + Harmonic Coupling', date: '13 Okt 2026', desc: 'Form factor, compactness, dan integrasi bauran sistem HVAC.' },
    { id: 'Run 4 (Habib Run 4)', cv: 0.28776, lb: 0.27754, model: 'LightGBM + CatBoost + Cascaded Gas->Elec', date: '13 Okt 2026', desc: 'Inovasi cascaded stacking: proyeksi gas dijadikan fitur beban listrik.' },
    { id: 'Exp 1 (Piji Exp 1)', cv: 0.28745, lb: 0.27795, model: 'Tri-Model GBDT + Adaptive Coupling', date: '14 Okt 2026', desc: 'Adaptive physics-informed harmonic coupling pada EUI Gas.' },
    { id: 'Exp 2 (Piji Exp 2)', cv: 0.28685, lb: 0.27795, model: 'Decoupled Dual-Ensemble + SLSQP Solver', date: '14 Okt 2026', desc: 'Formulasi tertutup closed-form coupling EUI via optimizer SLSQP.' },
    { id: 'Exp 6 (Piji Grandmaster)', cv: 0.26549, lb: 0.26180, model: 'Stratified 5-Fold + Exact Subzone Heat Pump', date: '14 Okt 2026', desc: 'Terobosan 91.86% exact subzone match memotong error Heat Pump hingga separuh.' },
    { id: 'Exp 8 (Piji Exp 8)', cv: 0.26331, lb: 0.25971, model: 'Tri-Model GBDT + Nested Inner OOF + Decile SLSQP', date: '15 Okt 2026', desc: 'Menembus batas sub-0.260 dengan nested OOF physics-residual encoding.' },
    { id: 'Exp 13 (Habib 7-Fold)', cv: 0.25840, lb: 0.25577, model: '7-Fold Tri-Model GBDT + Tri-Scale Cascaded Listrik', date: '16 Okt 2026', desc: 'Peningkatan partisi ke 7-fold stratified dan dekomposisi ganda beban listrik.' },
    { id: 'Exp 17 (Piji Final Best)', cv: 0.25685, lb: 0.25457, model: '7-Fold Stratified Multi-Sector GBDT Super-Pipeline', date: '21 Okt 2026', desc: 'REKOR NASIONAL RESMI! Closed-form SLSQP decile coupling + exact subzone resolution.' },
    { id: 'Final 100% (Private LB)', cv: 0.25685, lb: 0.23438, model: 'CASCADE-X Complete Super-Pipeline (All Test Set)', date: '23 Okt 2026', desc: 'REKOR TERTINGGI 100% PRIVATE LB (0.23438)! Terobosan akurasi tertinggi sepanjang sejarah kompetisi.' }
  ],
  feature_importance: [
  {
    "sector": "Gas Makro",
    "feature": "socio_demog_005",
    "split_gain": 1993
  },
  {
    "sector": "Gas Makro",
    "feature": "feat_sub_eui_te",
    "split_gain": 1848
  },
  {
    "sector": "Gas Makro",
    "feature": "feat_sub_eui_res_te",
    "split_gain": 1612
  },
  {
    "sector": "Gas Makro",
    "feature": "feat_envelope_to_floor",
    "split_gain": 1420
  },
  {
    "sector": "Gas Makro",
    "feature": "feat_dwellings_to_floor",
    "split_gain": 1305
  },
  {
    "sector": "Gas Makro",
    "feature": "bld_dim_06",
    "split_gain": 1280
  },
  {
    "sector": "Listrik Makro",
    "feature": "socio_demog_005",
    "split_gain": 2340
  },
  {
    "sector": "Listrik Makro",
    "feature": "feat_dwellings_to_floor",
    "split_gain": 1950
  },
  {
    "sector": "Listrik Makro",
    "feature": "pred_s1_gas",
    "split_gain": 1780
  },
  {
    "sector": "EUI Gas",
    "feature": "bld_dim_06",
    "split_gain": 2850
  },
  {
    "sector": "EUI Gas",
    "feature": "feat_envelope_to_floor",
    "split_gain": 2410
  },
  {
    "sector": "EUI Gas",
    "feature": "feat_compactness",
    "split_gain": 1890
  },
  {
    "sector": "Heat Pump",
    "feature": "hvac_dist_02",
    "split_gain": 3120
  },
  {
    "sector": "Heat Pump",
    "feature": "hvac_dist_09",
    "split_gain": 2450
  }
],
  macc_interventions: [
    {
      intervention_name: "Insulasi Dinding Pejal (Solid Wall Retrofit)",
      sector: "Efisiensi Selubung",
      cost_per_ton_usd: -25.0,
      annual_abatement_kt_co2: 180.5,
      payback_period_years: 6.8,
      feasibility_rank: "Prioritas #1 (Hemat Bersih)"
    },
    {
      intervention_name: "Elektrifikasi Pompa Kalor (Air-Source Heat Pump)",
      sector: "Elektrifikasi Pemanas",
      cost_per_ton_usd: 15.4,
      annual_abatement_kt_co2: 340.2,
      payback_period_years: 11.2,
      feasibility_rank: "Prioritas #2 (Reduksi Maksimal)"
    },
    {
      intervention_name: "Kaca Ganda & Insulasi Kusen Efisiensi Tinggi",
      sector: "Elemen Pasif",
      cost_per_ton_usd: 45.2,
      annual_abatement_kt_co2: 95.0,
      payback_period_years: 14.5,
      feasibility_rank: "Prioritas #3 (Kelayakan Menengah)"
    },
    {
      intervention_name: "Jaringan Distrik Hibrida (District Heating)",
      sector: "Infrastruktur Komunal",
      cost_per_ton_usd: 78.0,
      annual_abatement_kt_co2: 140.8,
      payback_period_years: 22.0,
      feasibility_rank: "Prioritas #4 (Investasi Jangka Panjang)"
    }
  ],
  policy_scenarios: [
  {
    "scenario": "Baseline Eksisting",
    "gas_savings_mwh": 0.0,
    "electricity_shift_mwh": 0.0,
    "net_energy_savings_mwh": 0.0,
    "avoided_co2_ton": 0.0
  },
  {
    "scenario": "Skenario 1: Heat Pump (+20%)",
    "gas_savings_mwh": 760713.8,
    "electricity_shift_mwh": 266249.8,
    "net_energy_savings_mwh": 494464.0,
    "avoided_co2_ton": 152142.8
  },
  {
    "scenario": "Skenario 2: Retrofit Pra-1919",
    "gas_savings_mwh": 141909.4,
    "electricity_shift_mwh": 0.0,
    "net_energy_savings_mwh": 141909.4,
    "avoided_co2_ton": 28381.9
  },
  {
    "scenario": "Skenario 3: Transisi Terpadu",
    "gas_savings_mwh": 902623.2,
    "electricity_shift_mwh": 266249.8,
    "net_energy_savings_mwh": 636373.4,
    "avoided_co2_ton": 180524.7
  }
],
  zone_regions: [
  {
    "zone_region_id": "REG_001",
    "building_count": 1007,
    "mean_macro_gas_kwh": 209105.65108296205,
    "mean_macro_elec_kwh": 54483.2072591857,
    "mean_eui_gas": 143.18917637987923,
    "mean_clean_building_ratio": 97.38731876861966,
    "mean_electric_heating_adoption": 3.2366530025490645,
    "mean_floor_area": 1508.694124800836
  },
  {
    "zone_region_id": "REG_002",
    "building_count": 1583,
    "mean_macro_gas_kwh": 221652.92943948036,
    "mean_macro_elec_kwh": 56308.55658433354,
    "mean_eui_gas": 140.12917958999898,
    "mean_clean_building_ratio": 88.15656348704991,
    "mean_electric_heating_adoption": 4.687101227006105,
    "mean_floor_area": 1625.1946612036345
  },
  {
    "zone_region_id": "REG_003",
    "building_count": 1610,
    "mean_macro_gas_kwh": 204089.81580342585,
    "mean_macro_elec_kwh": 52267.477320496895,
    "mean_eui_gas": 140.2043880429746,
    "mean_clean_building_ratio": 89.83155900621118,
    "mean_electric_heating_adoption": 3.2393638919726184,
    "mean_floor_area": 1510.0316260604952
  },
  {
    "zone_region_id": "REG_004",
    "building_count": 2186,
    "mean_macro_gas_kwh": 215550.4131132024,
    "mean_macro_elec_kwh": 55951.92219441903,
    "mean_eui_gas": 136.39790180128605,
    "mean_clean_building_ratio": 88.91707227813357,
    "mean_electric_heating_adoption": 3.1202897593630885,
    "mean_floor_area": 1624.5265377435635
  },
  {
    "zone_region_id": "REG_005",
    "building_count": 1013,
    "mean_macro_gas_kwh": 240468.9462935813,
    "mean_macro_elec_kwh": 59627.73171470878,
    "mean_eui_gas": 138.6874756869336,
    "mean_clean_building_ratio": 85.34104639684107,
    "mean_electric_heating_adoption": 4.357229736335318,
    "mean_floor_area": 1761.5965126270478
  },
  {
    "zone_region_id": "REG_006",
    "building_count": 1222,
    "mean_macro_gas_kwh": 225505.65424069585,
    "mean_macro_elec_kwh": 68360.85367023274,
    "mean_eui_gas": 126.45080825031336,
    "mean_clean_building_ratio": 96.28939443535188,
    "mean_electric_heating_adoption": 3.294351058545267,
    "mean_floor_area": 1862.946850676735
  },
  {
    "zone_region_id": "REG_007",
    "building_count": 1821,
    "mean_macro_gas_kwh": 248259.98831352455,
    "mean_macro_elec_kwh": 70064.50979132345,
    "mean_eui_gas": 133.75736609609072,
    "mean_clean_building_ratio": 95.84252059308074,
    "mean_electric_heating_adoption": 3.2570822390603547,
    "mean_floor_area": 1939.325911916162
  },
  {
    "zone_region_id": "REG_008",
    "building_count": 1075,
    "mean_macro_gas_kwh": 274373.6679464329,
    "mean_macro_elec_kwh": 70850.52956093023,
    "mean_eui_gas": 151.0962505307426,
    "mean_clean_building_ratio": 90.60822325581395,
    "mean_electric_heating_adoption": 3.744949432227604,
    "mean_floor_area": 1887.736774303608
  },
  {
    "zone_region_id": "REG_009",
    "building_count": 1203,
    "mean_macro_gas_kwh": 231311.82063806875,
    "mean_macro_elec_kwh": 67578.15980299252,
    "mean_eui_gas": 128.87845457332295,
    "mean_clean_building_ratio": 85.25881130507067,
    "mean_electric_heating_adoption": 5.7010375947653325,
    "mean_floor_area": 1827.992233028389
  },
  {
    "zone_region_id": "REG_010",
    "building_count": 2231,
    "mean_macro_gas_kwh": 238729.7727018824,
    "mean_macro_elec_kwh": 65846.13857283728,
    "mean_eui_gas": 144.15660120796042,
    "mean_clean_building_ratio": 90.36721649484537,
    "mean_electric_heating_adoption": 4.883000296466327,
    "mean_floor_area": 1713.802353726596
  },
  {
    "zone_region_id": "REG_011",
    "building_count": 2493,
    "mean_macro_gas_kwh": 215411.0697837717,
    "mean_macro_elec_kwh": 55692.29907019655,
    "mean_eui_gas": 141.00137780738223,
    "mean_clean_building_ratio": 90.5120617729643,
    "mean_electric_heating_adoption": 3.799947316499361,
    "mean_floor_area": 1581.4866727246747
  },
  {
    "zone_region_id": "REG_012",
    "building_count": 1714,
    "mean_macro_gas_kwh": 196901.8639765708,
    "mean_macro_elec_kwh": 54517.048915986,
    "mean_eui_gas": 121.72271359556136,
    "mean_clean_building_ratio": 83.41874562427071,
    "mean_electric_heating_adoption": 3.066688977987228,
    "mean_floor_area": 1661.598132958243
  },
  {
    "zone_region_id": "REG_013",
    "building_count": 1411,
    "mean_macro_gas_kwh": 202952.24770373583,
    "mean_macro_elec_kwh": 53001.049452161584,
    "mean_eui_gas": 138.62247037584123,
    "mean_clean_building_ratio": 93.11555634301912,
    "mean_electric_heating_adoption": 2.4089511613891377,
    "mean_floor_area": 1532.8810675342968
  },
  {
    "zone_region_id": "REG_014",
    "building_count": 1775,
    "mean_macro_gas_kwh": 217372.02481392733,
    "mean_macro_elec_kwh": 56561.7238428169,
    "mean_eui_gas": 143.07954550668117,
    "mean_clean_building_ratio": 95.52594929577464,
    "mean_electric_heating_adoption": 5.691190999071767,
    "mean_floor_area": 1548.7888635110091
  },
  {
    "zone_region_id": "REG_015",
    "building_count": 2080,
    "mean_macro_gas_kwh": 231762.36820694144,
    "mean_macro_elec_kwh": 64506.717846634616,
    "mean_eui_gas": 126.2441395377255,
    "mean_clean_building_ratio": 83.92382211538461,
    "mean_electric_heating_adoption": 4.615403891439916,
    "mean_floor_area": 1862.595842155353
  },
  {
    "zone_region_id": "REG_016",
    "building_count": 1797,
    "mean_macro_gas_kwh": 290456.4788677409,
    "mean_macro_elec_kwh": 71044.29219087368,
    "mean_eui_gas": 149.52635491702665,
    "mean_clean_building_ratio": 83.50634947134112,
    "mean_electric_heating_adoption": 5.451566653907635,
    "mean_floor_area": 1976.4424546578036
  },
  {
    "zone_region_id": "REG_017",
    "building_count": 248,
    "mean_macro_gas_kwh": 211114.91375382087,
    "mean_macro_elec_kwh": 59057.57638306452,
    "mean_eui_gas": 138.6385846674846,
    "mean_clean_building_ratio": 92.2275,
    "mean_electric_heating_adoption": 3.949220272642133,
    "mean_floor_area": 1615.8082105881256
  },
  {
    "zone_region_id": "REG_018",
    "building_count": 1966,
    "mean_macro_gas_kwh": 249705.45384886375,
    "mean_macro_elec_kwh": 68507.89290488302,
    "mean_eui_gas": 138.1105353252519,
    "mean_clean_building_ratio": 87.45827568667345,
    "mean_electric_heating_adoption": 6.064232956952622,
    "mean_floor_area": 1850.2368912880004
  },
  {
    "zone_region_id": "REG_019",
    "building_count": 932,
    "mean_macro_gas_kwh": 182500.4245461207,
    "mean_macro_elec_kwh": 59967.84432725322,
    "mean_eui_gas": 122.44654949453664,
    "mean_clean_building_ratio": 95.72621244635194,
    "mean_electric_heating_adoption": 6.085076809228567,
    "mean_floor_area": 1527.492789053919
  },
  {
    "zone_region_id": "REG_020",
    "building_count": 1717,
    "mean_macro_gas_kwh": 196237.35464445653,
    "mean_macro_elec_kwh": 58209.74103960396,
    "mean_eui_gas": 142.64266891639488,
    "mean_clean_building_ratio": 96.44505532906231,
    "mean_electric_heating_adoption": 3.4084145250054623,
    "mean_floor_area": 1422.9198669870902
  },
  {
    "zone_region_id": "REG_021",
    "building_count": 2150,
    "mean_macro_gas_kwh": 221558.96730276677,
    "mean_macro_elec_kwh": 59424.59761906977,
    "mean_eui_gas": 129.22904995581376,
    "mean_clean_building_ratio": 84.03976744186046,
    "mean_electric_heating_adoption": 4.262397170468977,
    "mean_floor_area": 1750.584606642211
  },
  {
    "zone_region_id": "REG_022",
    "building_count": 1508,
    "mean_macro_gas_kwh": 203936.4641463241,
    "mean_macro_elec_kwh": 60144.81530702917,
    "mean_eui_gas": 132.2934155871845,
    "mean_clean_building_ratio": 90.44644562334216,
    "mean_electric_heating_adoption": 6.432496436863505,
    "mean_floor_area": 1600.1048083557555
  },
  {
    "zone_region_id": "REG_023",
    "building_count": 3997,
    "mean_macro_gas_kwh": 197651.80072381347,
    "mean_macro_elec_kwh": 59542.76120565424,
    "mean_eui_gas": 129.6971195580269,
    "mean_clean_building_ratio": 90.37745308981737,
    "mean_electric_heating_adoption": 7.937697678119233,
    "mean_floor_area": 1553.5587642466403
  },
  {
    "zone_region_id": "REG_024",
    "building_count": 1974,
    "mean_macro_gas_kwh": 186784.3273844917,
    "mean_macro_elec_kwh": 57966.471376899695,
    "mean_eui_gas": 127.85228443313376,
    "mean_clean_building_ratio": 91.6966919959473,
    "mean_electric_heating_adoption": 4.965811848056789,
    "mean_floor_area": 1541.877686755218
  },
  {
    "zone_region_id": "REG_025",
    "building_count": 2293,
    "mean_macro_gas_kwh": 207261.30647073773,
    "mean_macro_elec_kwh": 66151.0771059747,
    "mean_eui_gas": 124.10330110080604,
    "mean_clean_building_ratio": 86.33326210204972,
    "mean_electric_heating_adoption": 5.359192708816724,
    "mean_floor_area": 1727.9537676528269
  },
  {
    "zone_region_id": "REG_026",
    "building_count": 2030,
    "mean_macro_gas_kwh": 171226.48091189505,
    "mean_macro_elec_kwh": 63561.0832044335,
    "mean_eui_gas": 95.81835096134864,
    "mean_clean_building_ratio": 77.93842857142857,
    "mean_electric_heating_adoption": 5.041128898870029,
    "mean_floor_area": 1845.435439547913
  },
  {
    "zone_region_id": "REG_027",
    "building_count": 1144,
    "mean_macro_gas_kwh": 189799.672761084,
    "mean_macro_elec_kwh": 63764.68293356644,
    "mean_eui_gas": 110.50151995076698,
    "mean_clean_building_ratio": 93.78015734265736,
    "mean_electric_heating_adoption": 7.42322542313145,
    "mean_floor_area": 1758.8710542824654
  },
  {
    "zone_region_id": "REG_028",
    "building_count": 1789,
    "mean_macro_gas_kwh": 216608.737145756,
    "mean_macro_elec_kwh": 65784.14306260481,
    "mean_eui_gas": 145.66363705175866,
    "mean_clean_building_ratio": 95.90524315259924,
    "mean_electric_heating_adoption": 5.7264986014202846,
    "mean_floor_area": 1531.7916332234329
  },
  {
    "zone_region_id": "REG_029",
    "building_count": 1413,
    "mean_macro_gas_kwh": 260223.6666202,
    "mean_macro_elec_kwh": 75259.76942250531,
    "mean_eui_gas": 141.63383602329165,
    "mean_clean_building_ratio": 95.26685067232836,
    "mean_electric_heating_adoption": 5.609458344713563,
    "mean_floor_area": 1931.092826722048
  },
  {
    "zone_region_id": "REG_030",
    "building_count": 1049,
    "mean_macro_gas_kwh": 334131.40272182424,
    "mean_macro_elec_kwh": 84114.63378265014,
    "mean_eui_gas": 176.37544776813624,
    "mean_clean_building_ratio": 96.2690943755958,
    "mean_electric_heating_adoption": 6.535992593170871,
    "mean_floor_area": 1918.5502343240933
  },
  {
    "zone_region_id": "REG_031",
    "building_count": 1117,
    "mean_macro_gas_kwh": 305005.60469892685,
    "mean_macro_elec_kwh": 78939.06089883618,
    "mean_eui_gas": 128.93741575021824,
    "mean_clean_building_ratio": 82.09480752014323,
    "mean_electric_heating_adoption": 5.259249740256045,
    "mean_floor_area": 2424.223623640091
  },
  {
    "zone_region_id": "REG_032",
    "building_count": 975,
    "mean_macro_gas_kwh": 242266.6431749598,
    "mean_macro_elec_kwh": 76653.76918051283,
    "mean_eui_gas": 142.4428721045607,
    "mean_clean_building_ratio": 93.76731282051284,
    "mean_electric_heating_adoption": 7.384055559093459,
    "mean_floor_area": 1768.1360936430983
  },
  {
    "zone_region_id": "REG_033",
    "building_count": 2136,
    "mean_macro_gas_kwh": 227898.03721480377,
    "mean_macro_elec_kwh": 71471.64338389513,
    "mean_eui_gas": 147.11948219508506,
    "mean_clean_building_ratio": 96.02447097378275,
    "mean_electric_heating_adoption": 5.167226536153499,
    "mean_floor_area": 1595.178788107513
  },
  {
    "zone_region_id": "REG_034",
    "building_count": 960,
    "mean_macro_gas_kwh": 242909.19908695,
    "mean_macro_elec_kwh": 73030.06962708334,
    "mean_eui_gas": 131.45860663188012,
    "mean_clean_building_ratio": 88.19564583333334,
    "mean_electric_heating_adoption": 5.880118654848584,
    "mean_floor_area": 1933.413146583448
  },
  {
    "zone_region_id": "REG_035",
    "building_count": 1008,
    "mean_macro_gas_kwh": 226847.9929505107,
    "mean_macro_elec_kwh": 67332.82560615079,
    "mean_eui_gas": 141.9953724786843,
    "mean_clean_building_ratio": 91.14902777777776,
    "mean_electric_heating_adoption": 8.252117173316888,
    "mean_floor_area": 1666.6693941940173
  },
  {
    "zone_region_id": "REG_036",
    "building_count": 1033,
    "mean_macro_gas_kwh": 247482.40323925117,
    "mean_macro_elec_kwh": 68745.30222458858,
    "mean_eui_gas": 131.29009933467796,
    "mean_clean_building_ratio": 78.56555663117135,
    "mean_electric_heating_adoption": 9.183737830327468,
    "mean_floor_area": 1915.0919145957891
  },
  {
    "zone_region_id": "REG_037",
    "building_count": 927,
    "mean_macro_gas_kwh": 260494.54015496897,
    "mean_macro_elec_kwh": 68974.99109482454,
    "mean_eui_gas": 145.39304049750822,
    "mean_clean_building_ratio": 85.96384034519956,
    "mean_electric_heating_adoption": 8.141738101549853,
    "mean_floor_area": 1867.824455880907
  },
  {
    "zone_region_id": "REG_038",
    "building_count": 1220,
    "mean_macro_gas_kwh": 248509.64587102656,
    "mean_macro_elec_kwh": 66804.20152622952,
    "mean_eui_gas": 153.87696677499628,
    "mean_clean_building_ratio": 91.0161475409836,
    "mean_electric_heating_adoption": 6.62514858841988,
    "mean_floor_area": 1685.3503193575384
  },
  {
    "zone_region_id": "REG_039",
    "building_count": 1213,
    "mean_macro_gas_kwh": 254036.29495471664,
    "mean_macro_elec_kwh": 69608.51306677658,
    "mean_eui_gas": 130.2674311791983,
    "mean_clean_building_ratio": 78.67098928277,
    "mean_electric_heating_adoption": 4.284265357103693,
    "mean_floor_area": 2001.4314778510804
  },
  {
    "zone_region_id": "REG_040",
    "building_count": 2563,
    "mean_macro_gas_kwh": 206388.4770146294,
    "mean_macro_elec_kwh": 60855.444647288336,
    "mean_eui_gas": 133.07214681283176,
    "mean_clean_building_ratio": 87.36489270386267,
    "mean_electric_heating_adoption": 5.647363745977826,
    "mean_floor_area": 1644.4649176493467
  },
  {
    "zone_region_id": "REG_041",
    "building_count": 1535,
    "mean_macro_gas_kwh": 294602.97115501226,
    "mean_macro_elec_kwh": 88650.25089055375,
    "mean_eui_gas": 133.96314526598033,
    "mean_clean_building_ratio": 90.96861889250812,
    "mean_electric_heating_adoption": 7.558133206703816,
    "mean_floor_area": 2247.859832807802
  },
  {
    "zone_region_id": "REG_042",
    "building_count": 1291,
    "mean_macro_gas_kwh": 226440.3762428381,
    "mean_macro_elec_kwh": 72525.62361270333,
    "mean_eui_gas": 115.75044604894568,
    "mean_clean_building_ratio": 90.28607281177382,
    "mean_electric_heating_adoption": 8.373304051995335,
    "mean_floor_area": 2041.339992757652
  },
  {
    "zone_region_id": "REG_043",
    "building_count": 1803,
    "mean_macro_gas_kwh": 176852.05623350333,
    "mean_macro_elec_kwh": 57284.84608818635,
    "mean_eui_gas": 136.656841795489,
    "mean_clean_building_ratio": 93.68652800887408,
    "mean_electric_heating_adoption": 12.40890161124977,
    "mean_floor_area": 1324.1202844199204
  },
  {
    "zone_region_id": "REG_044",
    "building_count": 1187,
    "mean_macro_gas_kwh": 156714.85649330675,
    "mean_macro_elec_kwh": 51573.28052232519,
    "mean_eui_gas": 111.61605124818615,
    "mean_clean_building_ratio": 90.36565290648694,
    "mean_electric_heating_adoption": 7.879021883089284,
    "mean_floor_area": 1461.3682591314794
  },
  {
    "zone_region_id": "REG_045",
    "building_count": 5001,
    "mean_macro_gas_kwh": 232297.9384471296,
    "mean_macro_elec_kwh": 55763.90766486702,
    "mean_eui_gas": 151.2300568562627,
    "mean_clean_building_ratio": 95.88177364527094,
    "mean_electric_heating_adoption": 2.5685094555431287,
    "mean_floor_area": 1603.477545552686
  },
  {
    "zone_region_id": "REG_046",
    "building_count": 3274,
    "mean_macro_gas_kwh": 234079.79327715805,
    "mean_macro_elec_kwh": 62918.51894502138,
    "mean_eui_gas": 141.10383795501593,
    "mean_clean_building_ratio": 94.95907758094076,
    "mean_electric_heating_adoption": 4.122026824037914,
    "mean_floor_area": 1715.9163780510548
  },
  {
    "zone_region_id": "REG_047",
    "building_count": 3272,
    "mean_macro_gas_kwh": 198469.3841373556,
    "mean_macro_elec_kwh": 57285.06286216382,
    "mean_eui_gas": 124.61064960107883,
    "mean_clean_building_ratio": 90.14010085574571,
    "mean_electric_heating_adoption": 3.6739372928236422,
    "mean_floor_area": 1659.048874119201
  },
  {
    "zone_region_id": "REG_048",
    "building_count": 2255,
    "mean_macro_gas_kwh": 165065.1314349209,
    "mean_macro_elec_kwh": 49391.50265055432,
    "mean_eui_gas": 131.04716286648377,
    "mean_clean_building_ratio": 96.004110864745,
    "mean_electric_heating_adoption": 5.1074480149884725,
    "mean_floor_area": 1311.3581289049646
  },
  {
    "zone_region_id": "REG_049",
    "building_count": 2804,
    "mean_macro_gas_kwh": 145648.23384549556,
    "mean_macro_elec_kwh": 57320.18762325584,
    "mean_eui_gas": 108.35771133749992,
    "mean_clean_building_ratio": 94.0602853067047,
    "mean_electric_heating_adoption": 10.150407543846878,
    "mean_floor_area": 1423.746656580282
  },
  {
    "zone_region_id": "REG_050",
    "building_count": 3165,
    "mean_macro_gas_kwh": 185421.6829206266,
    "mean_macro_elec_kwh": 58832.85525624013,
    "mean_eui_gas": 135.55123736367577,
    "mean_clean_building_ratio": 94.50254976303316,
    "mean_electric_heating_adoption": 7.13347650598639,
    "mean_floor_area": 1429.9142063126253
  },
  {
    "zone_region_id": "REG_051",
    "building_count": 1294,
    "mean_macro_gas_kwh": 214643.7889626901,
    "mean_macro_elec_kwh": 61106.949666924265,
    "mean_eui_gas": 133.60408122191933,
    "mean_clean_building_ratio": 86.14272797527047,
    "mean_electric_heating_adoption": 5.190039427309327,
    "mean_floor_area": 1673.742179166513
  },
  {
    "zone_region_id": "REG_052",
    "building_count": 1683,
    "mean_macro_gas_kwh": 243545.62494463104,
    "mean_macro_elec_kwh": 71519.34615745692,
    "mean_eui_gas": 152.86067689788212,
    "mean_clean_building_ratio": 95.31544860368388,
    "mean_electric_heating_adoption": 4.781569966929819,
    "mean_floor_area": 1655.6315748780685
  },
  {
    "zone_region_id": "REG_053",
    "building_count": 2890,
    "mean_macro_gas_kwh": 218753.71856275387,
    "mean_macro_elec_kwh": 53866.72609100346,
    "mean_eui_gas": 142.03448875717527,
    "mean_clean_building_ratio": 96.12948096885812,
    "mean_electric_heating_adoption": 3.241355072788622,
    "mean_floor_area": 1614.1894036873136
  },
  {
    "zone_region_id": "REG_054",
    "building_count": 3083,
    "mean_macro_gas_kwh": 214378.8634337333,
    "mean_macro_elec_kwh": 64834.25929419397,
    "mean_eui_gas": 115.41822930865848,
    "mean_clean_building_ratio": 85.53029841063898,
    "mean_electric_heating_adoption": 7.110855504509436,
    "mean_floor_area": 1890.2587059807836
  },
  {
    "zone_region_id": "REG_055",
    "building_count": 2762,
    "mean_macro_gas_kwh": 181984.4894298809,
    "mean_macro_elec_kwh": 55079.881267197685,
    "mean_eui_gas": 118.80807153404702,
    "mean_clean_building_ratio": 91.67167270094134,
    "mean_electric_heating_adoption": 5.930757493251287,
    "mean_floor_area": 1603.5384042023932
  },
  {
    "zone_region_id": "REG_056",
    "building_count": 4155,
    "mean_macro_gas_kwh": 246475.4505071579,
    "mean_macro_elec_kwh": 64560.37054512636,
    "mean_eui_gas": 155.49108287531192,
    "mean_clean_building_ratio": 93.69088327316486,
    "mean_electric_heating_adoption": 5.718675936312863,
    "mean_floor_area": 1633.3164366677972
  },
  {
    "zone_region_id": "REG_057",
    "building_count": 2552,
    "mean_macro_gas_kwh": 237225.5485908701,
    "mean_macro_elec_kwh": 69224.08951332288,
    "mean_eui_gas": 139.6596357711686,
    "mean_clean_building_ratio": 96.04059952978056,
    "mean_electric_heating_adoption": 4.240893206689719,
    "mean_floor_area": 1774.6578322592325
  },
  {
    "zone_region_id": "REG_058",
    "building_count": 2567,
    "mean_macro_gas_kwh": 257603.47366346684,
    "mean_macro_elec_kwh": 77022.60070666147,
    "mean_eui_gas": 135.1752713025287,
    "mean_clean_building_ratio": 95.53408258667704,
    "mean_electric_heating_adoption": 5.344955644948769,
    "mean_floor_area": 1969.9629328701988
  },
  {
    "zone_region_id": "REG_059",
    "building_count": 728,
    "mean_macro_gas_kwh": 234729.73864381327,
    "mean_macro_elec_kwh": 64573.735700549456,
    "mean_eui_gas": 150.8542267580977,
    "mean_clean_building_ratio": 96.79894230769231,
    "mean_electric_heating_adoption": 8.181452991200638,
    "mean_floor_area": 1590.0369970106246
  },
  {
    "zone_region_id": "REG_060",
    "building_count": 365,
    "mean_macro_gas_kwh": 231797.60770561892,
    "mean_macro_elec_kwh": 68443.64765753424,
    "mean_eui_gas": 151.0870784582242,
    "mean_clean_building_ratio": 93.98671232876713,
    "mean_electric_heating_adoption": 6.3231693525863975,
    "mean_floor_area": 1616.673574224915
  },
  {
    "zone_region_id": "REG_061",
    "building_count": 649,
    "mean_macro_gas_kwh": 210134.62906254816,
    "mean_macro_elec_kwh": 60979.41745762712,
    "mean_eui_gas": 135.31966882699513,
    "mean_clean_building_ratio": 94.25348228043144,
    "mean_electric_heating_adoption": 5.641011668393635,
    "mean_floor_area": 1634.3640952595008
  },
  {
    "zone_region_id": "REG_062",
    "building_count": 1308,
    "mean_macro_gas_kwh": 204530.85928167883,
    "mean_macro_elec_kwh": 61075.787717125386,
    "mean_eui_gas": 155.62238100657308,
    "mean_clean_building_ratio": 94.68309633027523,
    "mean_electric_heating_adoption": 5.181567745642521,
    "mean_floor_area": 1405.555659365149
  },
  {
    "zone_region_id": "REG_063",
    "building_count": 721,
    "mean_macro_gas_kwh": 231650.89595927263,
    "mean_macro_elec_kwh": 67836.8021595007,
    "mean_eui_gas": 156.11801283919775,
    "mean_clean_building_ratio": 90.47069348127602,
    "mean_electric_heating_adoption": 5.198339949823952,
    "mean_floor_area": 1549.3959861370074
  },
  {
    "zone_region_id": "REG_064",
    "building_count": 714,
    "mean_macro_gas_kwh": 189582.7078574221,
    "mean_macro_elec_kwh": 52080.85625490197,
    "mean_eui_gas": 141.49955184688395,
    "mean_clean_building_ratio": 96.26680672268908,
    "mean_electric_heating_adoption": 3.3623000329921418,
    "mean_floor_area": 1416.6247228596726
  },
  {
    "zone_region_id": "REG_065",
    "building_count": 645,
    "mean_macro_gas_kwh": 189334.15093355268,
    "mean_macro_elec_kwh": 56135.81932868217,
    "mean_eui_gas": 121.51236426191282,
    "mean_clean_building_ratio": 95.98415503875968,
    "mean_electric_heating_adoption": 2.6044724796139684,
    "mean_floor_area": 1652.4895874484102
  },
  {
    "zone_region_id": "REG_066",
    "building_count": 850,
    "mean_macro_gas_kwh": 234666.2413445517,
    "mean_macro_elec_kwh": 62958.00046941176,
    "mean_eui_gas": 146.75430747895598,
    "mean_clean_building_ratio": 96.87061176470588,
    "mean_electric_heating_adoption": 4.658857156236901,
    "mean_floor_area": 1649.6513931845686
  },
  {
    "zone_region_id": "REG_067",
    "building_count": 575,
    "mean_macro_gas_kwh": 189074.73237418392,
    "mean_macro_elec_kwh": 51888.10800695653,
    "mean_eui_gas": 146.9418582603685,
    "mean_clean_building_ratio": 95.20349565217391,
    "mean_electric_heating_adoption": 3.963893832854247,
    "mean_floor_area": 1381.3330295990556
  },
  {
    "zone_region_id": "REG_068",
    "building_count": 225,
    "mean_macro_gas_kwh": 188991.52175260935,
    "mean_macro_elec_kwh": 48201.41089777777,
    "mean_eui_gas": 147.58585321197393,
    "mean_clean_building_ratio": 96.68426666666666,
    "mean_electric_heating_adoption": 5.570709809781154,
    "mean_floor_area": 1357.9686987037785
  },
  {
    "zone_region_id": "REG_069",
    "building_count": 779,
    "mean_macro_gas_kwh": 196097.76973534905,
    "mean_macro_elec_kwh": 55244.547779204106,
    "mean_eui_gas": 133.0003588027042,
    "mean_clean_building_ratio": 94.2030295250321,
    "mean_electric_heating_adoption": 5.215100640678273,
    "mean_floor_area": 1544.519365820854
  },
  {
    "zone_region_id": "REG_070",
    "building_count": 555,
    "mean_macro_gas_kwh": 227117.81436016544,
    "mean_macro_elec_kwh": 62611.01995495496,
    "mean_eui_gas": 145.45313440869128,
    "mean_clean_building_ratio": 93.46765765765768,
    "mean_electric_heating_adoption": 3.567151612467006,
    "mean_floor_area": 1588.2327040489397
  },
  {
    "zone_region_id": "REG_071",
    "building_count": 704,
    "mean_macro_gas_kwh": 215466.53696032203,
    "mean_macro_elec_kwh": 58008.07005255682,
    "mean_eui_gas": 143.37389198098393,
    "mean_clean_building_ratio": 92.86548295454546,
    "mean_electric_heating_adoption": 2.490319935844997,
    "mean_floor_area": 1557.505923513181
  },
  {
    "zone_region_id": "REG_072",
    "building_count": 1029,
    "mean_macro_gas_kwh": 208632.430025035,
    "mean_macro_elec_kwh": 56315.06648396501,
    "mean_eui_gas": 129.13102362154524,
    "mean_clean_building_ratio": 82.7212925170068,
    "mean_electric_heating_adoption": 3.0667718545525333,
    "mean_floor_area": 1634.098484193755
  },
  {
    "zone_region_id": "REG_073",
    "building_count": 385,
    "mean_macro_gas_kwh": 220479.93826015567,
    "mean_macro_elec_kwh": 56066.2257555905,
    "mean_eui_gas": 151.23305120762964,
    "mean_clean_building_ratio": 92.12833766233769,
    "mean_electric_heating_adoption": 3.01044248473029,
    "mean_floor_area": 1546.7494297524472
  },
  {
    "zone_region_id": "REG_074",
    "building_count": 749,
    "mean_macro_gas_kwh": 233313.76124463687,
    "mean_macro_elec_kwh": 66063.62879439253,
    "mean_eui_gas": 123.04627668655029,
    "mean_clean_building_ratio": 80.89088117489986,
    "mean_electric_heating_adoption": 3.5262140458870928,
    "mean_floor_area": 1928.8788471677997
  },
  {
    "zone_region_id": "REG_075",
    "building_count": 817,
    "mean_macro_gas_kwh": 220946.8562137882,
    "mean_macro_elec_kwh": 58033.23062668298,
    "mean_eui_gas": 153.62558355382708,
    "mean_clean_building_ratio": 95.6699388004896,
    "mean_electric_heating_adoption": 3.819704420362152,
    "mean_floor_area": 1497.549703500591
  },
  {
    "zone_region_id": "REG_076",
    "building_count": 870,
    "mean_macro_gas_kwh": 235060.17545363848,
    "mean_macro_elec_kwh": 58751.93028735632,
    "mean_eui_gas": 150.51635969616697,
    "mean_clean_building_ratio": 93.60659770114944,
    "mean_electric_heating_adoption": 1.954163207489929,
    "mean_floor_area": 1614.179236363924
  },
  {
    "zone_region_id": "REG_077",
    "building_count": 780,
    "mean_macro_gas_kwh": 217985.94752065183,
    "mean_macro_elec_kwh": 64967.59825128205,
    "mean_eui_gas": 139.6994278851761,
    "mean_clean_building_ratio": 93.60591025641024,
    "mean_electric_heating_adoption": 3.4402407513482576,
    "mean_floor_area": 1636.761007344783
  },
  {
    "zone_region_id": "REG_078",
    "building_count": 1208,
    "mean_macro_gas_kwh": 161966.08099655012,
    "mean_macro_elec_kwh": 49205.62103143674,
    "mean_eui_gas": 114.24347576999554,
    "mean_clean_building_ratio": 93.61880794701987,
    "mean_electric_heating_adoption": 6.839820487662945,
    "mean_floor_area": 1487.660366402168
  },
  {
    "zone_region_id": "REG_079",
    "building_count": 1071,
    "mean_macro_gas_kwh": 165640.80740040267,
    "mean_macro_elec_kwh": 55776.37832866195,
    "mean_eui_gas": 103.370104514427,
    "mean_clean_building_ratio": 88.04883286647993,
    "mean_electric_heating_adoption": 7.398606111847625,
    "mean_floor_area": 1663.2566550635254
  },
  {
    "zone_region_id": "REG_080",
    "building_count": 496,
    "mean_macro_gas_kwh": 147190.95579371136,
    "mean_macro_elec_kwh": 51878.39277217742,
    "mean_eui_gas": 120.11695660874446,
    "mean_clean_building_ratio": 93.21183467741936,
    "mean_electric_heating_adoption": 6.684639015156385,
    "mean_floor_area": 1309.1060696568652
  },
  {
    "zone_region_id": "REG_081",
    "building_count": 606,
    "mean_macro_gas_kwh": 173948.9317058484,
    "mean_macro_elec_kwh": 56560.10091584158,
    "mean_eui_gas": 108.19811214503828,
    "mean_clean_building_ratio": 96.26293729372937,
    "mean_electric_heating_adoption": 6.433873207335144,
    "mean_floor_area": 1683.343545468604
  },
  {
    "zone_region_id": "REG_082",
    "building_count": 537,
    "mean_macro_gas_kwh": 160115.49703803647,
    "mean_macro_elec_kwh": 53085.6757821229,
    "mean_eui_gas": 114.07695526792834,
    "mean_clean_building_ratio": 91.75540037243948,
    "mean_electric_heating_adoption": 8.373880188615106,
    "mean_floor_area": 1504.715661406328
  },
  {
    "zone_region_id": "REG_083",
    "building_count": 1022,
    "mean_macro_gas_kwh": 173576.1359878443,
    "mean_macro_elec_kwh": 60096.46067221135,
    "mean_eui_gas": 111.57307467064892,
    "mean_clean_building_ratio": 93.35771037181996,
    "mean_electric_heating_adoption": 6.815797005780566,
    "mean_floor_area": 1635.3401142473856
  },
  {
    "zone_region_id": "REG_084",
    "building_count": 319,
    "mean_macro_gas_kwh": 178358.6199557619,
    "mean_macro_elec_kwh": 63380.81268338558,
    "mean_eui_gas": 101.181728032196,
    "mean_clean_building_ratio": 94.62796238244512,
    "mean_electric_heating_adoption": 7.83765156611648,
    "mean_floor_area": 1828.3549519854237
  },
  {
    "zone_region_id": "REG_085",
    "building_count": 327,
    "mean_macro_gas_kwh": 169196.8393700202,
    "mean_macro_elec_kwh": 55465.03373394496,
    "mean_eui_gas": 117.1643213574034,
    "mean_clean_building_ratio": 93.66021406727828,
    "mean_electric_heating_adoption": 6.259894792717499,
    "mean_floor_area": 1541.0985652282332
  },
  {
    "zone_region_id": "REG_086",
    "building_count": 988,
    "mean_macro_gas_kwh": 182666.82089519248,
    "mean_macro_elec_kwh": 56334.51031882591,
    "mean_eui_gas": 130.1594476167275,
    "mean_clean_building_ratio": 96.30893724696357,
    "mean_electric_heating_adoption": 7.654804800305047,
    "mean_floor_area": 1458.4956101612129
  },
  {
    "zone_region_id": "REG_087",
    "building_count": 606,
    "mean_macro_gas_kwh": 219967.3214448281,
    "mean_macro_elec_kwh": 70498.20131188119,
    "mean_eui_gas": 117.9373985242272,
    "mean_clean_building_ratio": 88.30049504950495,
    "mean_electric_heating_adoption": 6.210195866876239,
    "mean_floor_area": 1924.5646089727657
  },
  {
    "zone_region_id": "REG_088",
    "building_count": 1021,
    "mean_macro_gas_kwh": 180334.9289633805,
    "mean_macro_elec_kwh": 54124.93075220372,
    "mean_eui_gas": 125.6625133826912,
    "mean_clean_building_ratio": 95.7654554358472,
    "mean_electric_heating_adoption": 5.737932099346805,
    "mean_floor_area": 1515.9652496909357
  },
  {
    "zone_region_id": "REG_089",
    "building_count": 585,
    "mean_macro_gas_kwh": 206151.7100142075,
    "mean_macro_elec_kwh": 58289.39548547008,
    "mean_eui_gas": 117.94387355965164,
    "mean_clean_building_ratio": 85.57078632478633,
    "mean_electric_heating_adoption": 7.412388796518387,
    "mean_floor_area": 1868.4944191316297
  },
  {
    "zone_region_id": "REG_090",
    "building_count": 1245,
    "mean_macro_gas_kwh": 186637.82045856057,
    "mean_macro_elec_kwh": 54147.83650032317,
    "mean_eui_gas": 136.02616114349553,
    "mean_clean_building_ratio": 93.8976546184739,
    "mean_electric_heating_adoption": 5.103225644912278,
    "mean_floor_area": 1443.079013956625
  },
  {
    "zone_region_id": "REG_091",
    "building_count": 1570,
    "mean_macro_gas_kwh": 226472.3779101515,
    "mean_macro_elec_kwh": 71101.39211783439,
    "mean_eui_gas": 128.35356608241176,
    "mean_clean_building_ratio": 91.2648407643312,
    "mean_electric_heating_adoption": 5.497586853112325,
    "mean_floor_area": 1797.6451033463677
  },
  {
    "zone_region_id": "REG_092",
    "building_count": 894,
    "mean_macro_gas_kwh": 203864.62100174345,
    "mean_macro_elec_kwh": 62170.31366778524,
    "mean_eui_gas": 145.66675933086216,
    "mean_clean_building_ratio": 95.58026845637583,
    "mean_electric_heating_adoption": 8.144668314494654,
    "mean_floor_area": 1462.122017958534
  },
  {
    "zone_region_id": "REG_093",
    "building_count": 581,
    "mean_macro_gas_kwh": 259016.78676771425,
    "mean_macro_elec_kwh": 68868.45964371774,
    "mean_eui_gas": 160.39583781010597,
    "mean_clean_building_ratio": 95.3682099827883,
    "mean_electric_heating_adoption": 6.346297990130974,
    "mean_floor_area": 1638.7463627910172
  },
  {
    "zone_region_id": "REG_094",
    "building_count": 712,
    "mean_macro_gas_kwh": 243551.31978117692,
    "mean_macro_elec_kwh": 69651.2933033708,
    "mean_eui_gas": 128.56570507340967,
    "mean_clean_building_ratio": 87.20359550561798,
    "mean_electric_heating_adoption": 4.1402806337885325,
    "mean_floor_area": 1966.3286502939309
  },
  {
    "zone_region_id": "REG_095",
    "building_count": 1121,
    "mean_macro_gas_kwh": 263903.1383830134,
    "mean_macro_elec_kwh": 77963.02657894736,
    "mean_eui_gas": 133.42509560087342,
    "mean_clean_building_ratio": 82.92899197145405,
    "mean_electric_heating_adoption": 6.462476723913056,
    "mean_floor_area": 2040.7242710354524
  },
  {
    "zone_region_id": "REG_096",
    "building_count": 1375,
    "mean_macro_gas_kwh": 195079.38457750116,
    "mean_macro_elec_kwh": 57863.81070981818,
    "mean_eui_gas": 123.23708136290084,
    "mean_clean_building_ratio": 87.07023272727272,
    "mean_electric_heating_adoption": 7.735162368844939,
    "mean_floor_area": 1640.19850049252
  },
  {
    "zone_region_id": "REG_097",
    "building_count": 829,
    "mean_macro_gas_kwh": 261793.16446055376,
    "mean_macro_elec_kwh": 71309.01905669481,
    "mean_eui_gas": 144.3270950060918,
    "mean_clean_building_ratio": 85.24728588661037,
    "mean_electric_heating_adoption": 5.434072586659984,
    "mean_floor_area": 1861.775313481218
  },
  {
    "zone_region_id": "REG_098",
    "building_count": 663,
    "mean_macro_gas_kwh": 275707.890911078,
    "mean_macro_elec_kwh": 83682.56908597285,
    "mean_eui_gas": 165.3999184000485,
    "mean_clean_building_ratio": 97.66745098039216,
    "mean_electric_heating_adoption": 4.758568293413069,
    "mean_floor_area": 1733.4874807408924
  },
  {
    "zone_region_id": "REG_099",
    "building_count": 254,
    "mean_macro_gas_kwh": 226836.30792552637,
    "mean_macro_elec_kwh": 70094.36025590551,
    "mean_eui_gas": 138.0024702901913,
    "mean_clean_building_ratio": 90.54476377952756,
    "mean_electric_heating_adoption": 6.33467764158668,
    "mean_floor_area": 1679.2326351549457
  },
  {
    "zone_region_id": "REG_100",
    "building_count": 610,
    "mean_macro_gas_kwh": 252747.8479869573,
    "mean_macro_elec_kwh": 71939.72104754098,
    "mean_eui_gas": 117.5097464434013,
    "mean_clean_building_ratio": 80.24345901639344,
    "mean_electric_heating_adoption": 3.971059570468625,
    "mean_floor_area": 2209.0326291309884
  },
  {
    "zone_region_id": "REG_101",
    "building_count": 1135,
    "mean_macro_gas_kwh": 184805.61293116564,
    "mean_macro_elec_kwh": 55418.952661674,
    "mean_eui_gas": 127.00771479867186,
    "mean_clean_building_ratio": 95.18669603524228,
    "mean_electric_heating_adoption": 6.916566585969028,
    "mean_floor_area": 1516.5592119287126
  },
  {
    "zone_region_id": "REG_102",
    "building_count": 476,
    "mean_macro_gas_kwh": 228103.8322256664,
    "mean_macro_elec_kwh": 64821.501126050425,
    "mean_eui_gas": 151.1642833086954,
    "mean_clean_building_ratio": 92.58533613445378,
    "mean_electric_heating_adoption": 5.530159235724973,
    "mean_floor_area": 1576.2814433284193
  },
  {
    "zone_region_id": "REG_103",
    "building_count": 1407,
    "mean_macro_gas_kwh": 176394.8872022319,
    "mean_macro_elec_kwh": 52733.13885429993,
    "mean_eui_gas": 143.74438821564706,
    "mean_clean_building_ratio": 95.87628287135747,
    "mean_electric_heating_adoption": 7.047653694291653,
    "mean_floor_area": 1281.2981266800723
  },
  {
    "zone_region_id": "REG_104",
    "building_count": 523,
    "mean_macro_gas_kwh": 193976.6548521977,
    "mean_macro_elec_kwh": 58287.08161950287,
    "mean_eui_gas": 147.54990710653402,
    "mean_clean_building_ratio": 94.66827915869982,
    "mean_electric_heating_adoption": 7.1916748010585625,
    "mean_floor_area": 1392.6970188126163
  },
  {
    "zone_region_id": "REG_105",
    "building_count": 533,
    "mean_macro_gas_kwh": 175517.6513565004,
    "mean_macro_elec_kwh": 54691.98365290807,
    "mean_eui_gas": 137.44277634896122,
    "mean_clean_building_ratio": 92.47444652908068,
    "mean_electric_heating_adoption": 5.202586157774949,
    "mean_floor_area": 1369.3500033668745
  },
  {
    "zone_region_id": "REG_106",
    "building_count": 1059,
    "mean_macro_gas_kwh": 204861.36933629392,
    "mean_macro_elec_kwh": 66634.28481397545,
    "mean_eui_gas": 118.2625185366847,
    "mean_clean_building_ratio": 86.7761000944287,
    "mean_electric_heating_adoption": 5.860997269866656,
    "mean_floor_area": 1788.5455500514888
  },
  {
    "zone_region_id": "REG_107",
    "building_count": 891,
    "mean_macro_gas_kwh": 178537.62272197654,
    "mean_macro_elec_kwh": 56436.40654208754,
    "mean_eui_gas": 133.74388879454258,
    "mean_clean_building_ratio": 92.72494949494948,
    "mean_electric_heating_adoption": 5.772541719206626,
    "mean_floor_area": 1403.262043497469
  },
  {
    "zone_region_id": "REG_108",
    "building_count": 786,
    "mean_macro_gas_kwh": 173131.6840820925,
    "mean_macro_elec_kwh": 56579.51718193384,
    "mean_eui_gas": 130.77787816701428,
    "mean_clean_building_ratio": 91.17965648854964,
    "mean_electric_heating_adoption": 5.057975002709867,
    "mean_floor_area": 1402.6578378700942
  },
  {
    "zone_region_id": "REG_109",
    "building_count": 1353,
    "mean_macro_gas_kwh": 235387.45197655316,
    "mean_macro_elec_kwh": 70182.89029785662,
    "mean_eui_gas": 131.84124369396753,
    "mean_clean_building_ratio": 89.61373244641538,
    "mean_electric_heating_adoption": 4.93907363666262,
    "mean_floor_area": 1871.767574702986
  },
  {
    "zone_region_id": "REG_110",
    "building_count": 957,
    "mean_macro_gas_kwh": 210926.43123217276,
    "mean_macro_elec_kwh": 61883.38234273773,
    "mean_eui_gas": 136.44847758441043,
    "mean_clean_building_ratio": 89.85399164054337,
    "mean_electric_heating_adoption": 5.199714442938717,
    "mean_floor_area": 1614.1730958634057
  },
  {
    "zone_region_id": "REG_111",
    "building_count": 1163,
    "mean_macro_gas_kwh": 188271.24418003592,
    "mean_macro_elec_kwh": 58572.50807050731,
    "mean_eui_gas": 122.44342397099794,
    "mean_clean_building_ratio": 93.37788478073946,
    "mean_electric_heating_adoption": 5.522125101944969,
    "mean_floor_area": 1582.67116761485
  },
  {
    "zone_region_id": "REG_112",
    "building_count": 1147,
    "mean_macro_gas_kwh": 180892.80630239085,
    "mean_macro_elec_kwh": 55864.39147428073,
    "mean_eui_gas": 105.44189208284348,
    "mean_clean_building_ratio": 84.24083696599826,
    "mean_electric_heating_adoption": 4.790165455423672,
    "mean_floor_area": 1755.8081823638283
  },
  {
    "zone_region_id": "REG_113",
    "building_count": 613,
    "mean_macro_gas_kwh": 195996.3467339461,
    "mean_macro_elec_kwh": 65592.5730309951,
    "mean_eui_gas": 107.33113379118456,
    "mean_clean_building_ratio": 82.5210929853181,
    "mean_electric_heating_adoption": 7.736261070004152,
    "mean_floor_area": 1876.7131962845904
  },
  {
    "zone_region_id": "REG_114",
    "building_count": 920,
    "mean_macro_gas_kwh": 241776.7667498967,
    "mean_macro_elec_kwh": 64286.29707391304,
    "mean_eui_gas": 143.5601903526842,
    "mean_clean_building_ratio": 89.21246739130434,
    "mean_electric_heating_adoption": 4.630443523140392,
    "mean_floor_area": 1745.1974444646992
  },
  {
    "zone_region_id": "REG_115",
    "building_count": 1074,
    "mean_macro_gas_kwh": 195075.79451945503,
    "mean_macro_elec_kwh": 62036.794189944136,
    "mean_eui_gas": 112.28874850223612,
    "mean_clean_building_ratio": 85.74908752327747,
    "mean_electric_heating_adoption": 5.627555834188694,
    "mean_floor_area": 1814.617884339872
  },
  {
    "zone_region_id": "REG_116",
    "building_count": 1623,
    "mean_macro_gas_kwh": 186014.76342398077,
    "mean_macro_elec_kwh": 57245.44200677757,
    "mean_eui_gas": 120.62100813505904,
    "mean_clean_building_ratio": 88.59135551447935,
    "mean_electric_heating_adoption": 4.98449821338298,
    "mean_floor_area": 1603.324008059195
  },
  {
    "zone_region_id": "REG_117",
    "building_count": 814,
    "mean_macro_gas_kwh": 225769.3835745519,
    "mean_macro_elec_kwh": 64633.97645577396,
    "mean_eui_gas": 136.62383048365447,
    "mean_clean_building_ratio": 92.88210073710074,
    "mean_electric_heating_adoption": 6.734259566113738,
    "mean_floor_area": 1675.2083481507166
  },
  {
    "zone_region_id": "REG_118",
    "building_count": 936,
    "mean_macro_gas_kwh": 212462.48572931893,
    "mean_macro_elec_kwh": 64503.371193376064,
    "mean_eui_gas": 120.93836109531352,
    "mean_clean_building_ratio": 93.48869658119658,
    "mean_electric_heating_adoption": 5.312273533668126,
    "mean_floor_area": 1813.4906087010263
  },
  {
    "zone_region_id": "REG_119",
    "building_count": 947,
    "mean_macro_gas_kwh": 207314.88196420984,
    "mean_macro_elec_kwh": 59144.85079936642,
    "mean_eui_gas": 136.55246697286665,
    "mean_clean_building_ratio": 93.12337909186904,
    "mean_electric_heating_adoption": 5.612863763136509,
    "mean_floor_area": 1583.2697349290395
  },
  {
    "zone_region_id": "REG_120",
    "building_count": 850,
    "mean_macro_gas_kwh": 232631.37212952384,
    "mean_macro_elec_kwh": 66126.36129294118,
    "mean_eui_gas": 149.28207519465357,
    "mean_clean_building_ratio": 95.69103529411764,
    "mean_electric_heating_adoption": 6.985329668515689,
    "mean_floor_area": 1664.1652334222103
  },
  {
    "zone_region_id": "REG_121",
    "building_count": 1324,
    "mean_macro_gas_kwh": 235961.91519611137,
    "mean_macro_elec_kwh": 64238.415217522655,
    "mean_eui_gas": 153.02828412954906,
    "mean_clean_building_ratio": 96.15679758308156,
    "mean_electric_heating_adoption": 5.341544496638478,
    "mean_floor_area": 1586.6883647920306
  },
  {
    "zone_region_id": "REG_122",
    "building_count": 883,
    "mean_macro_gas_kwh": 239919.41539131425,
    "mean_macro_elec_kwh": 62827.48901698754,
    "mean_eui_gas": 149.36548009582117,
    "mean_clean_building_ratio": 84.08459796149491,
    "mean_electric_heating_adoption": 6.175749428390589,
    "mean_floor_area": 1654.8759145211202
  },
  {
    "zone_region_id": "REG_123",
    "building_count": 1071,
    "mean_macro_gas_kwh": 242050.23366175103,
    "mean_macro_elec_kwh": 67530.84900186742,
    "mean_eui_gas": 153.3614273389692,
    "mean_clean_building_ratio": 95.25108309990664,
    "mean_electric_heating_adoption": 6.534957965966113,
    "mean_floor_area": 1638.4708015581257
  },
  {
    "zone_region_id": "REG_124",
    "building_count": 669,
    "mean_macro_gas_kwh": 244616.2038417394,
    "mean_macro_elec_kwh": 63362.096514200304,
    "mean_eui_gas": 147.49466037399512,
    "mean_clean_building_ratio": 83.37928251121076,
    "mean_electric_heating_adoption": 5.008226764046249,
    "mean_floor_area": 1729.346469271273
  },
  {
    "zone_region_id": "REG_125",
    "building_count": 639,
    "mean_macro_gas_kwh": 247496.75297117012,
    "mean_macro_elec_kwh": 64190.8124192525,
    "mean_eui_gas": 141.76901090380457,
    "mean_clean_building_ratio": 79.0617840375587,
    "mean_electric_heating_adoption": 8.657721560730952,
    "mean_floor_area": 1746.098876950624
  },
  {
    "zone_region_id": "REG_126",
    "building_count": 713,
    "mean_macro_gas_kwh": 210983.02207957665,
    "mean_macro_elec_kwh": 66487.41935343618,
    "mean_eui_gas": 121.2042920943074,
    "mean_clean_building_ratio": 95.33427769985974,
    "mean_electric_heating_adoption": 5.213061105451697,
    "mean_floor_area": 1994.872821886088
  },
  {
    "zone_region_id": "REG_127",
    "building_count": 1206,
    "mean_macro_gas_kwh": 208181.64588972085,
    "mean_macro_elec_kwh": 60223.25175704809,
    "mean_eui_gas": 126.55800666517425,
    "mean_clean_building_ratio": 93.67456053067994,
    "mean_electric_heating_adoption": 6.019112207078304,
    "mean_floor_area": 1706.551734366651
  },
  {
    "zone_region_id": "REG_128",
    "building_count": 747,
    "mean_macro_gas_kwh": 255215.32173517716,
    "mean_macro_elec_kwh": 75646.4468901622,
    "mean_eui_gas": 145.62903691879006,
    "mean_clean_building_ratio": 86.89576974564926,
    "mean_electric_heating_adoption": 5.182860820524785,
    "mean_floor_area": 1870.5365677355671
  },
  {
    "zone_region_id": "REG_129",
    "building_count": 990,
    "mean_macro_gas_kwh": 173301.64891362443,
    "mean_macro_elec_kwh": 51229.61554040404,
    "mean_eui_gas": 125.41847544135832,
    "mean_clean_building_ratio": 93.81411111111112,
    "mean_electric_heating_adoption": 4.996115795187302,
    "mean_floor_area": 1464.85729921782
  },
  {
    "zone_region_id": "REG_130",
    "building_count": 611,
    "mean_macro_gas_kwh": 235078.3826104468,
    "mean_macro_elec_kwh": 68706.66827332242,
    "mean_eui_gas": 150.56384982423978,
    "mean_clean_building_ratio": 95.44569558101472,
    "mean_electric_heating_adoption": 4.688310197376358,
    "mean_floor_area": 1635.8160240931272
  },
  {
    "zone_region_id": "REG_131",
    "building_count": 1411,
    "mean_macro_gas_kwh": 198056.37812143957,
    "mean_macro_elec_kwh": 58627.78650531538,
    "mean_eui_gas": 143.92878041910393,
    "mean_clean_building_ratio": 95.06950389794471,
    "mean_electric_heating_adoption": 4.959489496919581,
    "mean_floor_area": 1433.9723900689876
  },
  {
    "zone_region_id": "REG_132",
    "building_count": 793,
    "mean_macro_gas_kwh": 242725.30078754545,
    "mean_macro_elec_kwh": 66959.85169356872,
    "mean_eui_gas": 147.12559072224332,
    "mean_clean_building_ratio": 88.2932030264817,
    "mean_electric_heating_adoption": 5.363652387086424,
    "mean_floor_area": 1785.344024575852
  },
  {
    "zone_region_id": "REG_133",
    "building_count": 852,
    "mean_macro_gas_kwh": 184916.31654828077,
    "mean_macro_elec_kwh": 54929.503379107984,
    "mean_eui_gas": 132.25445975812667,
    "mean_clean_building_ratio": 96.51845070422536,
    "mean_electric_heating_adoption": 5.656220293549982,
    "mean_floor_area": 1463.0230892854845
  },
  {
    "zone_region_id": "REG_134",
    "building_count": 1049,
    "mean_macro_gas_kwh": 206484.1763961472,
    "mean_macro_elec_kwh": 67187.7281534795,
    "mean_eui_gas": 134.47375321598847,
    "mean_clean_building_ratio": 94.03209723546234,
    "mean_electric_heating_adoption": 4.5949550362031895,
    "mean_floor_area": 1609.366258359816
  },
  {
    "zone_region_id": "REG_135",
    "building_count": 1159,
    "mean_macro_gas_kwh": 196154.6587245322,
    "mean_macro_elec_kwh": 60408.87657808455,
    "mean_eui_gas": 120.91831447170634,
    "mean_clean_building_ratio": 96.54554788610872,
    "mean_electric_heating_adoption": 5.939473559368093,
    "mean_floor_area": 1696.6080715131925
  },
  {
    "zone_region_id": "REG_136",
    "building_count": 1097,
    "mean_macro_gas_kwh": 215459.570039458,
    "mean_macro_elec_kwh": 63693.01201002734,
    "mean_eui_gas": 151.1846597423609,
    "mean_clean_building_ratio": 94.62845031905196,
    "mean_electric_heating_adoption": 4.18603892053421,
    "mean_floor_area": 1507.157875198394
  },
  {
    "zone_region_id": "REG_137",
    "building_count": 810,
    "mean_macro_gas_kwh": 227782.21861365743,
    "mean_macro_elec_kwh": 62264.17600493827,
    "mean_eui_gas": 167.10812307070955,
    "mean_clean_building_ratio": 96.05264197530865,
    "mean_electric_heating_adoption": 7.339324605726085,
    "mean_floor_area": 1402.867674270161
  },
  {
    "zone_region_id": "REG_138",
    "building_count": 762,
    "mean_macro_gas_kwh": 245852.34799325676,
    "mean_macro_elec_kwh": 64032.913036745405,
    "mean_eui_gas": 144.73610305683317,
    "mean_clean_building_ratio": 91.22963254593176,
    "mean_electric_heating_adoption": 3.504423043203959,
    "mean_floor_area": 1753.975332319592
  },
  {
    "zone_region_id": "REG_139",
    "building_count": 885,
    "mean_macro_gas_kwh": 242641.05341430372,
    "mean_macro_elec_kwh": 71376.87070282486,
    "mean_eui_gas": 131.2489636095946,
    "mean_clean_building_ratio": 86.64644067796611,
    "mean_electric_heating_adoption": 3.692408313138328,
    "mean_floor_area": 1911.833339493572
  },
  {
    "zone_region_id": "REG_140",
    "building_count": 667,
    "mean_macro_gas_kwh": 229513.6565493862,
    "mean_macro_elec_kwh": 59772.92747376312,
    "mean_eui_gas": 122.97215836700468,
    "mean_clean_building_ratio": 84.26244377811095,
    "mean_electric_heating_adoption": 6.684815216017355,
    "mean_floor_area": 1913.7398395864484
  },
  {
    "zone_region_id": "REG_141",
    "building_count": 595,
    "mean_macro_gas_kwh": 254962.64382019523,
    "mean_macro_elec_kwh": 65456.31474285714,
    "mean_eui_gas": 145.69822108198943,
    "mean_clean_building_ratio": 96.4497142857143,
    "mean_electric_heating_adoption": 3.023940291246583,
    "mean_floor_area": 1810.7147976322865
  },
  {
    "zone_region_id": "REG_142",
    "building_count": 1312,
    "mean_macro_gas_kwh": 197582.19369251284,
    "mean_macro_elec_kwh": 55417.68871341464,
    "mean_eui_gas": 125.39167202663464,
    "mean_clean_building_ratio": 85.04044207317072,
    "mean_electric_heating_adoption": 4.773284774773572,
    "mean_floor_area": 1628.142025302391
  },
  {
    "zone_region_id": "REG_143",
    "building_count": 876,
    "mean_macro_gas_kwh": 218397.00919092548,
    "mean_macro_elec_kwh": 52852.28675456621,
    "mean_eui_gas": 154.538469846925,
    "mean_clean_building_ratio": 93.40163242009132,
    "mean_electric_heating_adoption": 2.98594223582483,
    "mean_floor_area": 1451.1184281738133
  },
  {
    "zone_region_id": "REG_144",
    "building_count": 1016,
    "mean_macro_gas_kwh": 238883.1132782444,
    "mean_macro_elec_kwh": 65745.0608444882,
    "mean_eui_gas": 137.2422477859392,
    "mean_clean_building_ratio": 87.88254921259842,
    "mean_electric_heating_adoption": 5.378466553149484,
    "mean_floor_area": 1795.6742411094342
  },
  {
    "zone_region_id": "REG_145",
    "building_count": 403,
    "mean_macro_gas_kwh": 225568.65439544825,
    "mean_macro_elec_kwh": 58940.38112158809,
    "mean_eui_gas": 153.51712782145083,
    "mean_clean_building_ratio": 93.81771712158807,
    "mean_electric_heating_adoption": 2.636823960201872,
    "mean_floor_area": 1536.2983823995232
  },
  {
    "zone_region_id": "REG_146",
    "building_count": 699,
    "mean_macro_gas_kwh": 202533.47116175503,
    "mean_macro_elec_kwh": 53877.90808011445,
    "mean_eui_gas": 159.375426490728,
    "mean_clean_building_ratio": 97.04688125894135,
    "mean_electric_heating_adoption": 2.946823181611313,
    "mean_floor_area": 1321.9772708214025
  },
  {
    "zone_region_id": "REG_147",
    "building_count": 990,
    "mean_macro_gas_kwh": 230122.6754069756,
    "mean_macro_elec_kwh": 66002.92023535354,
    "mean_eui_gas": 129.07090143129943,
    "mean_clean_building_ratio": 82.49321212121212,
    "mean_electric_heating_adoption": 3.2578750075502234,
    "mean_floor_area": 1852.9157145943143
  },
  {
    "zone_region_id": "REG_148",
    "building_count": 781,
    "mean_macro_gas_kwh": 260873.11782569328,
    "mean_macro_elec_kwh": 76360.87791549297,
    "mean_eui_gas": 129.36312706428686,
    "mean_clean_building_ratio": 93.76842509603073,
    "mean_electric_heating_adoption": 3.6327299598384064,
    "mean_floor_area": 2118.765389181874
  },
  {
    "zone_region_id": "REG_149",
    "building_count": 1069,
    "mean_macro_gas_kwh": 219785.6204020736,
    "mean_macro_elec_kwh": 62115.137975678204,
    "mean_eui_gas": 122.09822411146848,
    "mean_clean_building_ratio": 83.03312441534145,
    "mean_electric_heating_adoption": 4.191237326738964,
    "mean_floor_area": 1835.7709720492933
  },
  {
    "zone_region_id": "REG_150",
    "building_count": 734,
    "mean_macro_gas_kwh": 236276.28214335124,
    "mean_macro_elec_kwh": 64705.46088559185,
    "mean_eui_gas": 132.39004666329112,
    "mean_clean_building_ratio": 81.90185286103542,
    "mean_electric_heating_adoption": 3.0280045247793064,
    "mean_floor_area": 1860.154855630083
  },
  {
    "zone_region_id": "REG_151",
    "building_count": 1310,
    "mean_macro_gas_kwh": 245091.472937233,
    "mean_macro_elec_kwh": 67538.22451984734,
    "mean_eui_gas": 132.6510210347499,
    "mean_clean_building_ratio": 89.08180916030534,
    "mean_electric_heating_adoption": 3.543093446683759,
    "mean_floor_area": 1911.7405105211635
  },
  {
    "zone_region_id": "REG_152",
    "building_count": 589,
    "mean_macro_gas_kwh": 233338.76221741555,
    "mean_macro_elec_kwh": 63540.013028862486,
    "mean_eui_gas": 137.8007879723273,
    "mean_clean_building_ratio": 92.63918505942276,
    "mean_electric_heating_adoption": 3.986910801424052,
    "mean_floor_area": 1746.3509151949174
  },
  {
    "zone_region_id": "REG_153",
    "building_count": 779,
    "mean_macro_gas_kwh": 244569.1892591369,
    "mean_macro_elec_kwh": 68988.65839794608,
    "mean_eui_gas": 137.8921590540624,
    "mean_clean_building_ratio": 92.2992811296534,
    "mean_electric_heating_adoption": 3.8177902920290543,
    "mean_floor_area": 1835.5718228223925
  },
  {
    "zone_region_id": "REG_154",
    "building_count": 347,
    "mean_macro_gas_kwh": 228114.85767273905,
    "mean_macro_elec_kwh": 65299.58570317003,
    "mean_eui_gas": 138.77886370996802,
    "mean_clean_building_ratio": 93.97302593659944,
    "mean_electric_heating_adoption": 3.298607913470487,
    "mean_floor_area": 1688.1862732297227
  },
  {
    "zone_region_id": "REG_155",
    "building_count": 724,
    "mean_macro_gas_kwh": 243348.5032515397,
    "mean_macro_elec_kwh": 68082.54901933702,
    "mean_eui_gas": 135.35102872287047,
    "mean_clean_building_ratio": 92.61169889502762,
    "mean_electric_heating_adoption": 3.2519396793045026,
    "mean_floor_area": 1868.671325725968
  },
  {
    "zone_region_id": "REG_156",
    "building_count": 441,
    "mean_macro_gas_kwh": 285678.777672468,
    "mean_macro_elec_kwh": 69066.23511337869,
    "mean_eui_gas": 135.16149584722726,
    "mean_clean_building_ratio": 79.59891156462585,
    "mean_electric_heating_adoption": 3.108809694547773,
    "mean_floor_area": 2154.3262203079416
  },
  {
    "zone_region_id": "REG_157",
    "building_count": 383,
    "mean_macro_gas_kwh": 231943.5746532396,
    "mean_macro_elec_kwh": 66648.58937075718,
    "mean_eui_gas": 133.69097754682966,
    "mean_clean_building_ratio": 95.31851174934724,
    "mean_electric_heating_adoption": 5.877921684844828,
    "mean_floor_area": 1835.188748120867
  },
  {
    "zone_region_id": "REG_158",
    "building_count": 794,
    "mean_macro_gas_kwh": 178391.0833123912,
    "mean_macro_elec_kwh": 51621.73877959698,
    "mean_eui_gas": 118.36906376706392,
    "mean_clean_building_ratio": 93.75090680100756,
    "mean_electric_heating_adoption": 5.4066200769620245,
    "mean_floor_area": 1586.3525198169568
  },
  {
    "zone_region_id": "REG_159",
    "building_count": 900,
    "mean_macro_gas_kwh": 209070.9570139536,
    "mean_macro_elec_kwh": 59230.87808,
    "mean_eui_gas": 128.67190942281815,
    "mean_clean_building_ratio": 96.71681111111111,
    "mean_electric_heating_adoption": 5.935302233318176,
    "mean_floor_area": 1673.9904004366197
  },
  {
    "zone_region_id": "REG_160",
    "building_count": 796,
    "mean_macro_gas_kwh": 201246.22892924267,
    "mean_macro_elec_kwh": 56027.50884045226,
    "mean_eui_gas": 125.91466428587334,
    "mean_clean_building_ratio": 94.3463944723618,
    "mean_electric_heating_adoption": 3.341618048736444,
    "mean_floor_area": 1666.9152504936417
  },
  {
    "zone_region_id": "REG_161",
    "building_count": 559,
    "mean_macro_gas_kwh": 208493.81267526376,
    "mean_macro_elec_kwh": 60307.05007513417,
    "mean_eui_gas": 130.64692404484936,
    "mean_clean_building_ratio": 94.05592128801432,
    "mean_electric_heating_adoption": 4.394320624739608,
    "mean_floor_area": 1690.617645044733
  },
  {
    "zone_region_id": "REG_162",
    "building_count": 1023,
    "mean_macro_gas_kwh": 221275.6231561433,
    "mean_macro_elec_kwh": 64305.47973411535,
    "mean_eui_gas": 133.58769597454864,
    "mean_clean_building_ratio": 94.84370478983382,
    "mean_electric_heating_adoption": 4.57565352726644,
    "mean_floor_area": 1738.8131987874422
  },
  {
    "zone_region_id": "REG_163",
    "building_count": 671,
    "mean_macro_gas_kwh": 194562.3823137336,
    "mean_macro_elec_kwh": 53886.25155737705,
    "mean_eui_gas": 129.21680164560505,
    "mean_clean_building_ratio": 93.69277198211624,
    "mean_electric_heating_adoption": 3.1206895531046226,
    "mean_floor_area": 1603.031371335131
  },
  {
    "zone_region_id": "REG_164",
    "building_count": 659,
    "mean_macro_gas_kwh": 188972.04388512095,
    "mean_macro_elec_kwh": 59506.77964780326,
    "mean_eui_gas": 131.2914785661115,
    "mean_clean_building_ratio": 94.40790591805766,
    "mean_electric_heating_adoption": 6.87055550064252,
    "mean_floor_area": 1516.912219689125
  },
  {
    "zone_region_id": "REG_165",
    "building_count": 870,
    "mean_macro_gas_kwh": 215656.8888103977,
    "mean_macro_elec_kwh": 62895.779442528736,
    "mean_eui_gas": 106.39239995323877,
    "mean_clean_building_ratio": 81.76777011494254,
    "mean_electric_heating_adoption": 4.099816051010626,
    "mean_floor_area": 2119.848501188408
  },
  {
    "zone_region_id": "REG_166",
    "building_count": 616,
    "mean_macro_gas_kwh": 193704.8666075616,
    "mean_macro_elec_kwh": 65588.65759415584,
    "mean_eui_gas": 109.7088439087174,
    "mean_clean_building_ratio": 96.66467532467531,
    "mean_electric_heating_adoption": 6.788069900381696,
    "mean_floor_area": 1835.210763145889
  },
  {
    "zone_region_id": "REG_167",
    "building_count": 750,
    "mean_macro_gas_kwh": 194024.72802595585,
    "mean_macro_elec_kwh": 58542.12045866667,
    "mean_eui_gas": 124.7980829098315,
    "mean_clean_building_ratio": 94.22310666666668,
    "mean_electric_heating_adoption": 7.2147960197995875,
    "mean_floor_area": 1641.5047719182762
  },
  {
    "zone_region_id": "REG_168",
    "building_count": 537,
    "mean_macro_gas_kwh": 185118.44050677243,
    "mean_macro_elec_kwh": 53042.49618994413,
    "mean_eui_gas": 116.7436059011816,
    "mean_clean_building_ratio": 92.53642458100558,
    "mean_electric_heating_adoption": 7.4966851013841875,
    "mean_floor_area": 1695.6926852420142
  },
  {
    "zone_region_id": "REG_169",
    "building_count": 970,
    "mean_macro_gas_kwh": 216348.46659492693,
    "mean_macro_elec_kwh": 64504.37293402062,
    "mean_eui_gas": 111.75260351477075,
    "mean_clean_building_ratio": 86.70939175257732,
    "mean_electric_heating_adoption": 6.819867473402576,
    "mean_floor_area": 1991.782743156581
  },
  {
    "zone_region_id": "REG_170",
    "building_count": 682,
    "mean_macro_gas_kwh": 198759.61259578264,
    "mean_macro_elec_kwh": 59514.77524340176,
    "mean_eui_gas": 122.99762740343732,
    "mean_clean_building_ratio": 89.21073313782992,
    "mean_electric_heating_adoption": 5.1718582281627326,
    "mean_floor_area": 1720.3472010493954
  },
  {
    "zone_region_id": "REG_171",
    "building_count": 487,
    "mean_macro_gas_kwh": 182847.2931278237,
    "mean_macro_elec_kwh": 45115.3079529726,
    "mean_eui_gas": 150.671274940974,
    "mean_clean_building_ratio": 95.41975359342916,
    "mean_electric_heating_adoption": 4.760981379752518,
    "mean_floor_area": 1306.9133970201592
  },
  {
    "zone_region_id": "REG_172",
    "building_count": 546,
    "mean_macro_gas_kwh": 199529.26798520837,
    "mean_macro_elec_kwh": 52283.01681868132,
    "mean_eui_gas": 145.49992337611616,
    "mean_clean_building_ratio": 93.80690476190476,
    "mean_electric_heating_adoption": 5.36022787992189,
    "mean_floor_area": 1446.29259940565
  },
  {
    "zone_region_id": "REG_173",
    "building_count": 1011,
    "mean_macro_gas_kwh": 258033.699473396,
    "mean_macro_elec_kwh": 63776.10654698318,
    "mean_eui_gas": 142.83145505946547,
    "mean_clean_building_ratio": 87.36532146389713,
    "mean_electric_heating_adoption": 4.467734423529635,
    "mean_floor_area": 1863.821210806199
  },
  {
    "zone_region_id": "REG_174",
    "building_count": 333,
    "mean_macro_gas_kwh": 195956.67051345605,
    "mean_macro_elec_kwh": 50791.86549249249,
    "mean_eui_gas": 155.8198336228519,
    "mean_clean_building_ratio": 94.78735735735737,
    "mean_electric_heating_adoption": 3.818969850062304,
    "mean_floor_area": 1349.7441475143655
  },
  {
    "zone_region_id": "REG_175",
    "building_count": 236,
    "mean_macro_gas_kwh": 176729.3321069373,
    "mean_macro_elec_kwh": 45775.41745338983,
    "mean_eui_gas": 143.33543888177826,
    "mean_clean_building_ratio": 90.90245762711864,
    "mean_electric_heating_adoption": 4.30968606075315,
    "mean_floor_area": 1277.9105034851284
  },
  {
    "zone_region_id": "REG_176",
    "building_count": 769,
    "mean_macro_gas_kwh": 231696.1545657965,
    "mean_macro_elec_kwh": 60029.82532769831,
    "mean_eui_gas": 139.0481581403937,
    "mean_clean_building_ratio": 94.9725487646294,
    "mean_electric_heating_adoption": 5.751210350397888,
    "mean_floor_area": 1772.9242209732658
  },
  {
    "zone_region_id": "REG_177",
    "building_count": 512,
    "mean_macro_gas_kwh": 198331.03258297185,
    "mean_macro_elec_kwh": 58332.33422070312,
    "mean_eui_gas": 145.25644845522103,
    "mean_clean_building_ratio": 95.36693359375,
    "mean_electric_heating_adoption": 4.40111397154393,
    "mean_floor_area": 1434.5587771633611
  },
  {
    "zone_region_id": "REG_178",
    "building_count": 953,
    "mean_macro_gas_kwh": 240557.8769973088,
    "mean_macro_elec_kwh": 65370.14913746065,
    "mean_eui_gas": 141.67553737295594,
    "mean_clean_building_ratio": 89.34335781741868,
    "mean_electric_heating_adoption": 3.009962680338475,
    "mean_floor_area": 1744.768413989902
  },
  {
    "zone_region_id": "REG_179",
    "building_count": 961,
    "mean_macro_gas_kwh": 199262.05789012107,
    "mean_macro_elec_kwh": 54442.297102814446,
    "mean_eui_gas": 135.57132154574236,
    "mean_clean_building_ratio": 93.94873048907388,
    "mean_electric_heating_adoption": 2.9070729195238254,
    "mean_floor_area": 1540.6027492128012
  },
  {
    "zone_region_id": "REG_180",
    "building_count": 640,
    "mean_macro_gas_kwh": 253580.1164944388,
    "mean_macro_elec_kwh": 65996.4207375,
    "mean_eui_gas": 126.50956067935014,
    "mean_clean_building_ratio": 81.1375625,
    "mean_electric_heating_adoption": 4.735172896127052,
    "mean_floor_area": 2026.8124335312416
  },
  {
    "zone_region_id": "REG_181",
    "building_count": 903,
    "mean_macro_gas_kwh": 260885.99410920884,
    "mean_macro_elec_kwh": 66904.5674717608,
    "mean_eui_gas": 133.82867967945435,
    "mean_clean_building_ratio": 83.58352159468438,
    "mean_electric_heating_adoption": 4.000810302671689,
    "mean_floor_area": 2011.4737222975823
  },
  {
    "zone_region_id": "REG_182",
    "building_count": 1017,
    "mean_macro_gas_kwh": 246362.6346928202,
    "mean_macro_elec_kwh": 61889.01562635201,
    "mean_eui_gas": 150.2475962532226,
    "mean_clean_building_ratio": 95.23240904621436,
    "mean_electric_heating_adoption": 2.6656424949223525,
    "mean_floor_area": 1671.9961741627017
  },
  {
    "zone_region_id": "REG_183",
    "building_count": 905,
    "mean_macro_gas_kwh": 232393.20450049435,
    "mean_macro_elec_kwh": 64488.10359116022,
    "mean_eui_gas": 135.95835982197926,
    "mean_clean_building_ratio": 92.9478453038674,
    "mean_electric_heating_adoption": 3.2499049395742263,
    "mean_floor_area": 1758.9744832062122
  },
  {
    "zone_region_id": "REG_184",
    "building_count": 917,
    "mean_macro_gas_kwh": 260234.0619535129,
    "mean_macro_elec_kwh": 67211.43976008723,
    "mean_eui_gas": 137.12663789625248,
    "mean_clean_building_ratio": 89.770239912759,
    "mean_electric_heating_adoption": 2.9090714561173203,
    "mean_floor_area": 1952.9623385745715
  },
  {
    "zone_region_id": "REG_185",
    "building_count": 1077,
    "mean_macro_gas_kwh": 211805.7645639808,
    "mean_macro_elec_kwh": 64360.784216341686,
    "mean_eui_gas": 142.44327806485248,
    "mean_clean_building_ratio": 96.01981429897864,
    "mean_electric_heating_adoption": 6.297291289226439,
    "mean_floor_area": 1559.545511921131
  },
  {
    "zone_region_id": "REG_186",
    "building_count": 894,
    "mean_macro_gas_kwh": 235446.1970069461,
    "mean_macro_elec_kwh": 63993.78837360179,
    "mean_eui_gas": 164.4221540076231,
    "mean_clean_building_ratio": 96.7830313199105,
    "mean_electric_heating_adoption": 9.058702642461274,
    "mean_floor_area": 1454.495958241571
  },
  {
    "zone_region_id": "REG_187",
    "building_count": 1013,
    "mean_macro_gas_kwh": 207343.7984667741,
    "mean_macro_elec_kwh": 62773.90994274432,
    "mean_eui_gas": 146.17766209979155,
    "mean_clean_building_ratio": 92.84214215202368,
    "mean_electric_heating_adoption": 6.53910725997978,
    "mean_floor_area": 1471.7752465972987
  },
  {
    "zone_region_id": "REG_188",
    "building_count": 904,
    "mean_macro_gas_kwh": 220177.1522967353,
    "mean_macro_elec_kwh": 63880.223637168136,
    "mean_eui_gas": 144.18610732633408,
    "mean_clean_building_ratio": 94.56065265486724,
    "mean_electric_heating_adoption": 6.044807769456545,
    "mean_floor_area": 1602.753368875045
  },
  {
    "zone_region_id": "REG_189",
    "building_count": 749,
    "mean_macro_gas_kwh": 207075.9553548659,
    "mean_macro_elec_kwh": 61239.97329906542,
    "mean_eui_gas": 154.4182266971715,
    "mean_clean_building_ratio": 93.91429906542056,
    "mean_electric_heating_adoption": 7.231236524644973,
    "mean_floor_area": 1432.5096424710655
  },
  {
    "zone_region_id": "REG_190",
    "building_count": 868,
    "mean_macro_gas_kwh": 167864.76548710925,
    "mean_macro_elec_kwh": 53225.16100230415,
    "mean_eui_gas": 125.36090597811577,
    "mean_clean_building_ratio": 94.84273041474655,
    "mean_electric_heating_adoption": 5.951221809122649,
    "mean_floor_area": 1421.7613166175788
  },
  {
    "zone_region_id": "REG_191",
    "building_count": 859,
    "mean_macro_gas_kwh": 167980.0327414991,
    "mean_macro_elec_kwh": 59217.37378579744,
    "mean_eui_gas": 113.566110598718,
    "mean_clean_building_ratio": 89.98917345750873,
    "mean_electric_heating_adoption": 7.151335335571651,
    "mean_floor_area": 1557.4771775458698
  },
  {
    "zone_region_id": "REG_192",
    "building_count": 963,
    "mean_macro_gas_kwh": 169331.1322894959,
    "mean_macro_elec_kwh": 57899.643105919,
    "mean_eui_gas": 119.49877432687995,
    "mean_clean_building_ratio": 93.7107268951194,
    "mean_electric_heating_adoption": 8.285976557847139,
    "mean_floor_area": 1493.126516596005
  },
  {
    "zone_region_id": "REG_193",
    "building_count": 796,
    "mean_macro_gas_kwh": 251318.6923910546,
    "mean_macro_elec_kwh": 72421.38505527638,
    "mean_eui_gas": 155.38828936440606,
    "mean_clean_building_ratio": 96.97263819095475,
    "mean_electric_heating_adoption": 4.5815656039238375,
    "mean_floor_area": 1647.824574680121
  },
  {
    "zone_region_id": "REG_194",
    "building_count": 682,
    "mean_macro_gas_kwh": 246605.70609061027,
    "mean_macro_elec_kwh": 70823.9529586579,
    "mean_eui_gas": 136.35042893946354,
    "mean_clean_building_ratio": 90.80870967741936,
    "mean_electric_heating_adoption": 5.131494423133371,
    "mean_floor_area": 1852.512063798725
  },
  {
    "zone_region_id": "REG_195",
    "building_count": 775,
    "mean_macro_gas_kwh": 246258.1761903556,
    "mean_macro_elec_kwh": 66635.02744,
    "mean_eui_gas": 164.5061702635441,
    "mean_clean_building_ratio": 95.26753548387096,
    "mean_electric_heating_adoption": 4.22177850223693,
    "mean_floor_area": 1554.2068188207888
  },
  {
    "zone_region_id": "REG_196",
    "building_count": 1008,
    "mean_macro_gas_kwh": 231092.61366158773,
    "mean_macro_elec_kwh": 60417.13396929447,
    "mean_eui_gas": 129.18513667206267,
    "mean_clean_building_ratio": 81.59304563492063,
    "mean_electric_heating_adoption": 3.630183895735556,
    "mean_floor_area": 1837.401145578238
  },
  {
    "zone_region_id": "REG_197",
    "building_count": 870,
    "mean_macro_gas_kwh": 224919.5441089263,
    "mean_macro_elec_kwh": 61254.02758505747,
    "mean_eui_gas": 150.8361964653219,
    "mean_clean_building_ratio": 95.08890804597702,
    "mean_electric_heating_adoption": 2.926526099986328,
    "mean_floor_area": 1532.44897552425
  },
  {
    "zone_region_id": "REG_198",
    "building_count": 1140,
    "mean_macro_gas_kwh": 216802.45523124925,
    "mean_macro_elec_kwh": 59905.037599122814,
    "mean_eui_gas": 141.45084065745462,
    "mean_clean_building_ratio": 94.66356140350878,
    "mean_electric_heating_adoption": 3.8945856047956737,
    "mean_floor_area": 1592.8125410340913
  },
  {
    "zone_region_id": "REG_199",
    "building_count": 716,
    "mean_macro_gas_kwh": 224418.77376519403,
    "mean_macro_elec_kwh": 57423.07288268156,
    "mean_eui_gas": 144.6273874082146,
    "mean_clean_building_ratio": 91.42111731843576,
    "mean_electric_heating_adoption": 3.125163970404661,
    "mean_floor_area": 1631.1763884333952
  },
  {
    "zone_region_id": "REG_200",
    "building_count": 586,
    "mean_macro_gas_kwh": 254215.31338151515,
    "mean_macro_elec_kwh": 79311.80976279863,
    "mean_eui_gas": 143.70595582375844,
    "mean_clean_building_ratio": 97.2622866894198,
    "mean_electric_heating_adoption": 4.5486717288371565,
    "mean_floor_area": 1833.9115583900964
  },
  {
    "zone_region_id": "REG_201",
    "building_count": 454,
    "mean_macro_gas_kwh": 200244.31648338365,
    "mean_macro_elec_kwh": 58551.774306167405,
    "mean_eui_gas": 138.96460050602894,
    "mean_clean_building_ratio": 93.91101321585904,
    "mean_electric_heating_adoption": 6.288255429241078,
    "mean_floor_area": 1481.79644657057
  },
  {
    "zone_region_id": "REG_202",
    "building_count": 1055,
    "mean_macro_gas_kwh": 214138.0406538197,
    "mean_macro_elec_kwh": 66355.52846824644,
    "mean_eui_gas": 129.64094612693717,
    "mean_clean_building_ratio": 94.11922274881516,
    "mean_electric_heating_adoption": 7.519715685731142,
    "mean_floor_area": 1687.107180071264
  },
  {
    "zone_region_id": "REG_203",
    "building_count": 422,
    "mean_macro_gas_kwh": 184887.5390081295,
    "mean_macro_elec_kwh": 60117.02937440759,
    "mean_eui_gas": 125.9003123670892,
    "mean_clean_building_ratio": 93.41369668246446,
    "mean_electric_heating_adoption": 6.604709729488401,
    "mean_floor_area": 1529.6877930451442
  },
  {
    "zone_region_id": "REG_204",
    "building_count": 1082,
    "mean_macro_gas_kwh": 296554.2145299219,
    "mean_macro_elec_kwh": 78082.19858780036,
    "mean_eui_gas": 139.72505463985956,
    "mean_clean_building_ratio": 85.78916820702403,
    "mean_electric_heating_adoption": 5.656798499302312,
    "mean_floor_area": 2154.7916803847743
  },
  {
    "zone_region_id": "REG_205",
    "building_count": 599,
    "mean_macro_gas_kwh": 284504.40321221313,
    "mean_macro_elec_kwh": 71052.92552253755,
    "mean_eui_gas": 134.04258322178032,
    "mean_clean_building_ratio": 80.61649415692821,
    "mean_electric_heating_adoption": 5.174448793670424,
    "mean_floor_area": 2140.507193712773
  },
  {
    "zone_region_id": "REG_206",
    "building_count": 1120,
    "mean_macro_gas_kwh": 242000.601545432,
    "mean_macro_elec_kwh": 67040.854125,
    "mean_eui_gas": 150.11766977605802,
    "mean_clean_building_ratio": 90.21366964285714,
    "mean_electric_heating_adoption": 5.692968336422315,
    "mean_floor_area": 1642.6859164712794
  },
  {
    "zone_region_id": "REG_207",
    "building_count": 796,
    "mean_macro_gas_kwh": 247240.82730732425,
    "mean_macro_elec_kwh": 64165.83050879397,
    "mean_eui_gas": 151.78833403629008,
    "mean_clean_building_ratio": 89.29905778894472,
    "mean_electric_heating_adoption": 5.67113052621835,
    "mean_floor_area": 1696.9637947699132
  },
  {
    "zone_region_id": "REG_208",
    "building_count": 1175,
    "mean_macro_gas_kwh": 257913.67357775988,
    "mean_macro_elec_kwh": 68808.1505319149,
    "mean_eui_gas": 142.2722331848808,
    "mean_clean_building_ratio": 85.52546382978723,
    "mean_electric_heating_adoption": 6.0217160790134345,
    "mean_floor_area": 1861.4026164446984
  },
  {
    "zone_region_id": "REG_209",
    "building_count": 644,
    "mean_macro_gas_kwh": 232943.3246957911,
    "mean_macro_elec_kwh": 67098.00980745342,
    "mean_eui_gas": 138.18869514144382,
    "mean_clean_building_ratio": 87.00428571428571,
    "mean_electric_heating_adoption": 8.525320673929915,
    "mean_floor_area": 1732.6889016638536
  },
  {
    "zone_region_id": "REG_210",
    "building_count": 776,
    "mean_macro_gas_kwh": 237374.9764674766,
    "mean_macro_elec_kwh": 66450.35458118557,
    "mean_eui_gas": 128.31833465365142,
    "mean_clean_building_ratio": 81.34626288659794,
    "mean_electric_heating_adoption": 7.215774834956308,
    "mean_floor_area": 1900.476274603968
  },
  {
    "zone_region_id": "REG_211",
    "building_count": 812,
    "mean_macro_gas_kwh": 270341.9642982984,
    "mean_macro_elec_kwh": 69988.95839162562,
    "mean_eui_gas": 149.63743907210758,
    "mean_clean_building_ratio": 90.44555418719212,
    "mean_electric_heating_adoption": 4.419400977201137,
    "mean_floor_area": 1859.8459394301465
  },
  {
    "zone_region_id": "REG_212",
    "building_count": 540,
    "mean_macro_gas_kwh": 262751.5816682505,
    "mean_macro_elec_kwh": 69876.83141851852,
    "mean_eui_gas": 142.38658230467976,
    "mean_clean_building_ratio": 83.35277777777777,
    "mean_electric_heating_adoption": 5.448515314864685,
    "mean_floor_area": 2009.274587666964
  },
  {
    "zone_region_id": "REG_213",
    "building_count": 1046,
    "mean_macro_gas_kwh": 233284.36002298896,
    "mean_macro_elec_kwh": 61418.8663833652,
    "mean_eui_gas": 150.34723108387337,
    "mean_clean_building_ratio": 88.67265774378586,
    "mean_electric_heating_adoption": 5.145931688758325,
    "mean_floor_area": 1614.1349842541388
  },
  {
    "zone_region_id": "REG_214",
    "building_count": 811,
    "mean_macro_gas_kwh": 262933.1121482511,
    "mean_macro_elec_kwh": 73369.53911713933,
    "mean_eui_gas": 152.50175419814178,
    "mean_clean_building_ratio": 91.55543773119606,
    "mean_electric_heating_adoption": 8.249613216738226,
    "mean_floor_area": 1773.8409477833309
  },
  {
    "zone_region_id": "REG_215",
    "building_count": 399,
    "mean_macro_gas_kwh": 230551.06144330345,
    "mean_macro_elec_kwh": 68829.49119298246,
    "mean_eui_gas": 153.9344707878189,
    "mean_clean_building_ratio": 93.25395989974938,
    "mean_electric_heating_adoption": 4.985813628852253,
    "mean_floor_area": 1555.4268507378126
  },
  {
    "zone_region_id": "REG_216",
    "building_count": 817,
    "mean_macro_gas_kwh": 264291.9546116902,
    "mean_macro_elec_kwh": 78793.37979681762,
    "mean_eui_gas": 147.76567741586518,
    "mean_clean_building_ratio": 96.14982864137087,
    "mean_electric_heating_adoption": 4.817125446139493,
    "mean_floor_area": 1829.76941264826
  },
  {
    "zone_region_id": "REG_217",
    "building_count": 713,
    "mean_macro_gas_kwh": 234633.49233357943,
    "mean_macro_elec_kwh": 68944.80182608696,
    "mean_eui_gas": 137.2935060206919,
    "mean_clean_building_ratio": 94.05091164095371,
    "mean_electric_heating_adoption": 5.790873624046367,
    "mean_floor_area": 1759.7089096377867
  },
  {
    "zone_region_id": "REG_218",
    "building_count": 760,
    "mean_macro_gas_kwh": 207151.3908084719,
    "mean_macro_elec_kwh": 61797.9271,
    "mean_eui_gas": 135.3271546602297,
    "mean_clean_building_ratio": 92.97888157894737,
    "mean_electric_heating_adoption": 6.137420619002029,
    "mean_floor_area": 1597.1530230933206
  },
  {
    "zone_region_id": "REG_219",
    "building_count": 1146,
    "mean_macro_gas_kwh": 226890.1112492979,
    "mean_macro_elec_kwh": 62158.55006806283,
    "mean_eui_gas": 143.03926981813726,
    "mean_clean_building_ratio": 95.19561082024433,
    "mean_electric_heating_adoption": 7.146749527626979,
    "mean_floor_area": 1634.5333955296944
  },
  {
    "zone_region_id": "REG_220",
    "building_count": 564,
    "mean_macro_gas_kwh": 201297.88196330616,
    "mean_macro_elec_kwh": 69048.74800177306,
    "mean_eui_gas": 103.35619905479686,
    "mean_clean_building_ratio": 83.73085106382979,
    "mean_electric_heating_adoption": 6.866232252946889,
    "mean_floor_area": 2028.6817275529231
  },
  {
    "zone_region_id": "REG_221",
    "building_count": 1750,
    "mean_macro_gas_kwh": 185655.2255612521,
    "mean_macro_elec_kwh": 55941.94429657143,
    "mean_eui_gas": 119.49944883883656,
    "mean_clean_building_ratio": 91.20736,
    "mean_electric_heating_adoption": 6.182349138710369,
    "mean_floor_area": 1622.581971242438
  },
  {
    "zone_region_id": "REG_222",
    "building_count": 917,
    "mean_macro_gas_kwh": 190053.1255078415,
    "mean_macro_elec_kwh": 56808.13924645584,
    "mean_eui_gas": 129.82118373988587,
    "mean_clean_building_ratio": 92.75321701199564,
    "mean_electric_heating_adoption": 8.171126588084023,
    "mean_floor_area": 1561.314479260033
  },
  {
    "zone_region_id": "REG_223",
    "building_count": 1131,
    "mean_macro_gas_kwh": 212348.8968811113,
    "mean_macro_elec_kwh": 62869.7007382847,
    "mean_eui_gas": 135.60474007160573,
    "mean_clean_building_ratio": 91.44479221927496,
    "mean_electric_heating_adoption": 5.394609879392107,
    "mean_floor_area": 1605.967781243789
  },
  {
    "zone_region_id": "REG_224",
    "building_count": 1078,
    "mean_macro_gas_kwh": 214962.32443805903,
    "mean_macro_elec_kwh": 64608.60725695732,
    "mean_eui_gas": 140.09992839699544,
    "mean_clean_building_ratio": 93.49919294990724,
    "mean_electric_heating_adoption": 5.912144472201193,
    "mean_floor_area": 1592.7569644029409
  },
  {
    "zone_region_id": "REG_225",
    "building_count": 1303,
    "mean_macro_gas_kwh": 222950.80337644127,
    "mean_macro_elec_kwh": 62561.232082118186,
    "mean_eui_gas": 149.88449530786315,
    "mean_clean_building_ratio": 95.08555640828855,
    "mean_electric_heating_adoption": 5.4980047586669984,
    "mean_floor_area": 1531.838006493926
  },
  {
    "zone_region_id": "REG_226",
    "building_count": 1046,
    "mean_macro_gas_kwh": 191636.5967244148,
    "mean_macro_elec_kwh": 60247.10940057361,
    "mean_eui_gas": 106.11195239006064,
    "mean_clean_building_ratio": 86.82928298279158,
    "mean_electric_heating_adoption": 7.927401078123467,
    "mean_floor_area": 1834.470517427964
  },
  {
    "zone_region_id": "REG_227",
    "building_count": 775,
    "mean_macro_gas_kwh": 236933.88036590765,
    "mean_macro_elec_kwh": 64431.39139741935,
    "mean_eui_gas": 140.291255730316,
    "mean_clean_building_ratio": 94.36050322580644,
    "mean_electric_heating_adoption": 3.4287845968727977,
    "mean_floor_area": 1733.6513559108564
  },
  {
    "zone_region_id": "REG_228",
    "building_count": 441,
    "mean_macro_gas_kwh": 182325.64695160103,
    "mean_macro_elec_kwh": 56339.0160952381,
    "mean_eui_gas": 123.6461130926562,
    "mean_clean_building_ratio": 94.6078911564626,
    "mean_electric_heating_adoption": 4.9971818948599545,
    "mean_floor_area": 1528.3516516776606
  },
  {
    "zone_region_id": "REG_229",
    "building_count": 548,
    "mean_macro_gas_kwh": 284598.8811009382,
    "mean_macro_elec_kwh": 87537.90651824817,
    "mean_eui_gas": 136.66328035723924,
    "mean_clean_building_ratio": 95.67131386861314,
    "mean_electric_heating_adoption": 3.6975480912561367,
    "mean_floor_area": 2148.737799090028
  },
  {
    "zone_region_id": "REG_230",
    "building_count": 924,
    "mean_macro_gas_kwh": 202907.24967665487,
    "mean_macro_elec_kwh": 64236.93943181819,
    "mean_eui_gas": 132.6436574145882,
    "mean_clean_building_ratio": 95.08655844155844,
    "mean_electric_heating_adoption": 5.729241013797834,
    "mean_floor_area": 1568.0663738928254
  },
  {
    "zone_region_id": "REG_231",
    "building_count": 774,
    "mean_macro_gas_kwh": 199622.39811021928,
    "mean_macro_elec_kwh": 63710.49679457364,
    "mean_eui_gas": 130.4670422284923,
    "mean_clean_building_ratio": 93.46204134366924,
    "mean_electric_heating_adoption": 4.724838734582986,
    "mean_floor_area": 1596.888874589129
  },
  {
    "zone_region_id": "REG_232",
    "building_count": 726,
    "mean_macro_gas_kwh": 213072.48369180245,
    "mean_macro_elec_kwh": 66013.07339807163,
    "mean_eui_gas": 134.93297752972015,
    "mean_clean_building_ratio": 96.27292011019284,
    "mean_electric_heating_adoption": 4.242086362544251,
    "mean_floor_area": 1622.3676170060598
  },
  {
    "zone_region_id": "REG_233",
    "building_count": 1507,
    "mean_macro_gas_kwh": 246741.58757012844,
    "mean_macro_elec_kwh": 63242.295644990045,
    "mean_eui_gas": 164.73635093058505,
    "mean_clean_building_ratio": 94.24323822163238,
    "mean_electric_heating_adoption": 5.348152713291486,
    "mean_floor_area": 1525.9491563710503
  },
  {
    "zone_region_id": "REG_234",
    "building_count": 1142,
    "mean_macro_gas_kwh": 226282.40599219705,
    "mean_macro_elec_kwh": 62785.31359106831,
    "mean_eui_gas": 155.76867914616716,
    "mean_clean_building_ratio": 95.53820490367777,
    "mean_electric_heating_adoption": 5.588705699721669,
    "mean_floor_area": 1492.8012092688562
  },
  {
    "zone_region_id": "REG_235",
    "building_count": 1028,
    "mean_macro_gas_kwh": 253837.03304583815,
    "mean_macro_elec_kwh": 70954.17598540857,
    "mean_eui_gas": 149.9152180475563,
    "mean_clean_building_ratio": 94.7729085603113,
    "mean_electric_heating_adoption": 7.246448500167061,
    "mean_floor_area": 1778.085435316194
  },
  {
    "zone_region_id": "REG_236",
    "building_count": 784,
    "mean_macro_gas_kwh": 230789.88784724005,
    "mean_macro_elec_kwh": 68665.02874617347,
    "mean_eui_gas": 145.993724282854,
    "mean_clean_building_ratio": 98.51572704081632,
    "mean_electric_heating_adoption": 5.323237954981475,
    "mean_floor_area": 1631.3336073412402
  },
  {
    "zone_region_id": "REG_237",
    "building_count": 1794,
    "mean_macro_gas_kwh": 196106.9650122164,
    "mean_macro_elec_kwh": 58792.47265217391,
    "mean_eui_gas": 119.84528813904664,
    "mean_clean_building_ratio": 93.22982162764772,
    "mean_electric_heating_adoption": 5.910518422921583,
    "mean_floor_area": 1708.1216156188486
  },
  {
    "zone_region_id": "REG_238",
    "building_count": 973,
    "mean_macro_gas_kwh": 206405.02857236488,
    "mean_macro_elec_kwh": 63465.35449743063,
    "mean_eui_gas": 133.1739889728092,
    "mean_clean_building_ratio": 95.97431654676258,
    "mean_electric_heating_adoption": 7.039190227443652,
    "mean_floor_area": 1603.594891410905
  },
  {
    "zone_region_id": "REG_239",
    "building_count": 976,
    "mean_macro_gas_kwh": 180125.39412510805,
    "mean_macro_elec_kwh": 60233.99727049181,
    "mean_eui_gas": 118.1367908810332,
    "mean_clean_building_ratio": 90.35002049180328,
    "mean_electric_heating_adoption": 7.292565550379208,
    "mean_floor_area": 1586.861190547998
  },
  {
    "zone_region_id": "REG_240",
    "building_count": 2601,
    "mean_macro_gas_kwh": 237797.7646779327,
    "mean_macro_elec_kwh": 62817.05693348712,
    "mean_eui_gas": 160.58613563853277,
    "mean_clean_building_ratio": 93.00586312956555,
    "mean_electric_heating_adoption": 4.89805461653398,
    "mean_floor_area": 1519.5181547079944
  },
  {
    "zone_region_id": "REG_241",
    "building_count": 1915,
    "mean_macro_gas_kwh": 241485.92145369013,
    "mean_macro_elec_kwh": 62661.74560574412,
    "mean_eui_gas": 144.5535948203029,
    "mean_clean_building_ratio": 92.15290339425589,
    "mean_electric_heating_adoption": 4.187838599007696,
    "mean_floor_area": 1703.1316384512877
  },
  {
    "zone_region_id": "REG_242",
    "building_count": 4987,
    "mean_macro_gas_kwh": 192544.9568665528,
    "mean_macro_elec_kwh": 54385.10642430319,
    "mean_eui_gas": 144.58369082428842,
    "mean_clean_building_ratio": 96.06154802486463,
    "mean_electric_heating_adoption": 7.964208938638571,
    "mean_floor_area": 1338.713648795528
  },
  {
    "zone_region_id": "REG_243",
    "building_count": 2075,
    "mean_macro_gas_kwh": 230816.3318947272,
    "mean_macro_elec_kwh": 61075.85460048193,
    "mean_eui_gas": 153.1408448407089,
    "mean_clean_building_ratio": 92.73800481927712,
    "mean_electric_heating_adoption": 4.009025465773,
    "mean_floor_area": 1541.9961999120728
  },
  {
    "zone_region_id": "REG_244",
    "building_count": 1964,
    "mean_macro_gas_kwh": 223536.82250439777,
    "mean_macro_elec_kwh": 61504.35435336049,
    "mean_eui_gas": 148.7447394347895,
    "mean_clean_building_ratio": 92.8938136456212,
    "mean_electric_heating_adoption": 4.522619814566196,
    "mean_floor_area": 1538.341962037669
  },
  {
    "zone_region_id": "REG_245",
    "building_count": 2366,
    "mean_macro_gas_kwh": 210747.0896341768,
    "mean_macro_elec_kwh": 59707.1389002536,
    "mean_eui_gas": 140.83821088540074,
    "mean_clean_building_ratio": 93.90070583262892,
    "mean_electric_heating_adoption": 7.462856393650275,
    "mean_floor_area": 1517.1507255953304
  },
  {
    "zone_region_id": "REG_246",
    "building_count": 2610,
    "mean_macro_gas_kwh": 269386.1924961414,
    "mean_macro_elec_kwh": 70342.30579501916,
    "mean_eui_gas": 143.41469527706994,
    "mean_clean_building_ratio": 89.9323908045977,
    "mean_electric_heating_adoption": 4.317885498061135,
    "mean_floor_area": 1900.6998894841813
  },
  {
    "zone_region_id": "REG_247",
    "building_count": 2175,
    "mean_macro_gas_kwh": 215564.12923809755,
    "mean_macro_elec_kwh": 60009.73638482759,
    "mean_eui_gas": 144.24948120970328,
    "mean_clean_building_ratio": 93.86042298850576,
    "mean_electric_heating_adoption": 4.388505539885106,
    "mean_floor_area": 1528.7367739069705
  },
  {
    "zone_region_id": "REG_248",
    "building_count": 2456,
    "mean_macro_gas_kwh": 237722.21518823184,
    "mean_macro_elec_kwh": 61131.76566001629,
    "mean_eui_gas": 141.90058351314977,
    "mean_clean_building_ratio": 89.08668159609121,
    "mean_electric_heating_adoption": 4.96948431224228,
    "mean_floor_area": 1698.636289387142
  },
  {
    "zone_region_id": "REG_249",
    "building_count": 3068,
    "mean_macro_gas_kwh": 209706.28783642317,
    "mean_macro_elec_kwh": 62213.08794589309,
    "mean_eui_gas": 143.37062229838577,
    "mean_clean_building_ratio": 94.71374185136898,
    "mean_electric_heating_adoption": 3.8644590064539943,
    "mean_floor_area": 1522.12507926147
  },
  {
    "zone_region_id": "REG_250",
    "building_count": 1644,
    "mean_macro_gas_kwh": 205461.8345071904,
    "mean_macro_elec_kwh": 61361.95601149778,
    "mean_eui_gas": 121.62165397267988,
    "mean_clean_building_ratio": 93.66472627737228,
    "mean_electric_heating_adoption": 3.533048298853409,
    "mean_floor_area": 1709.646883685478
  },
  {
    "zone_region_id": "REG_251",
    "building_count": 3765,
    "mean_macro_gas_kwh": 244199.5784542961,
    "mean_macro_elec_kwh": 66941.3910775305,
    "mean_eui_gas": 128.28750972485696,
    "mean_clean_building_ratio": 94.88822841965472,
    "mean_electric_heating_adoption": 5.176810570760597,
    "mean_floor_area": 1925.737433538103
  },
  {
    "zone_region_id": "REG_252",
    "building_count": 1808,
    "mean_macro_gas_kwh": 216810.98440436085,
    "mean_macro_elec_kwh": 61528.10437942477,
    "mean_eui_gas": 131.71212942370832,
    "mean_clean_building_ratio": 90.63973451327436,
    "mean_electric_heating_adoption": 3.0005983711038007,
    "mean_floor_area": 1700.1037435760347
  },
  {
    "zone_region_id": "REG_253",
    "building_count": 2536,
    "mean_macro_gas_kwh": 237559.36054224256,
    "mean_macro_elec_kwh": 63535.4665161672,
    "mean_eui_gas": 132.95982081156583,
    "mean_clean_building_ratio": 94.39130126182964,
    "mean_electric_heating_adoption": 3.1730607739941328,
    "mean_floor_area": 1826.1713363141407
  },
  {
    "zone_region_id": "REG_254",
    "building_count": 3545,
    "mean_macro_gas_kwh": 206493.6676850563,
    "mean_macro_elec_kwh": 57085.98918814544,
    "mean_eui_gas": 125.8731358200896,
    "mean_clean_building_ratio": 90.41222284908322,
    "mean_electric_heating_adoption": 3.455824927754877,
    "mean_floor_area": 1668.4233465663497
  },
  {
    "zone_region_id": "REG_255",
    "building_count": 2209,
    "mean_macro_gas_kwh": 194001.9930334122,
    "mean_macro_elec_kwh": 50828.12392530557,
    "mean_eui_gas": 136.4544352377091,
    "mean_clean_building_ratio": 82.53071072883658,
    "mean_electric_heating_adoption": 2.809305618682741,
    "mean_floor_area": 1478.8516025741396
  },
  {
    "zone_region_id": "REG_256",
    "building_count": 2785,
    "mean_macro_gas_kwh": 222205.07546454365,
    "mean_macro_elec_kwh": 58312.97396621269,
    "mean_eui_gas": 138.4920412782118,
    "mean_clean_building_ratio": 94.48626211849192,
    "mean_electric_heating_adoption": 2.657628752882073,
    "mean_floor_area": 1667.3658157942057
  },
  {
    "zone_region_id": "REG_257",
    "building_count": 2202,
    "mean_macro_gas_kwh": 224377.3017917026,
    "mean_macro_elec_kwh": 58747.89611852861,
    "mean_eui_gas": 139.8659709299473,
    "mean_clean_building_ratio": 85.06702997275205,
    "mean_electric_heating_adoption": 2.740010205351401,
    "mean_floor_area": 1670.172199525844
  },
  {
    "zone_region_id": "REG_258",
    "building_count": 3601,
    "mean_macro_gas_kwh": 277651.4963041941,
    "mean_macro_elec_kwh": 67710.72044876423,
    "mean_eui_gas": 150.02945724003803,
    "mean_clean_building_ratio": 86.99443487920023,
    "mean_electric_heating_adoption": 4.221247144969843,
    "mean_floor_area": 1895.577905128529
  },
  {
    "zone_region_id": "REG_259",
    "building_count": 2321,
    "mean_macro_gas_kwh": 273418.9821096278,
    "mean_macro_elec_kwh": 63214.78682591606,
    "mean_eui_gas": 141.35407473820615,
    "mean_clean_building_ratio": 96.00936234381732,
    "mean_electric_heating_adoption": 5.851410297665386,
    "mean_floor_area": 2005.823086100283
  },
  {
    "zone_region_id": "REG_260",
    "building_count": 1985,
    "mean_macro_gas_kwh": 266660.42784321454,
    "mean_macro_elec_kwh": 62598.71605289672,
    "mean_eui_gas": 139.4051777335941,
    "mean_clean_building_ratio": 95.98694710327456,
    "mean_electric_heating_adoption": 3.719424555913271,
    "mean_floor_area": 1969.7611427048512
  },
  {
    "zone_region_id": "REG_261",
    "building_count": 1546,
    "mean_macro_gas_kwh": 238409.28245752928,
    "mean_macro_elec_kwh": 57775.6032988357,
    "mean_eui_gas": 132.68351835437412,
    "mean_clean_building_ratio": 94.18232212160412,
    "mean_electric_heating_adoption": 3.250889628103555,
    "mean_floor_area": 1875.993895539332
  },
  {
    "zone_region_id": "REG_262",
    "building_count": 2960,
    "mean_macro_gas_kwh": 243913.47478849292,
    "mean_macro_elec_kwh": 57612.10092293998,
    "mean_eui_gas": 136.4958896183814,
    "mean_clean_building_ratio": 93.27823310810813,
    "mean_electric_heating_adoption": 3.397887817733245,
    "mean_floor_area": 1854.5998135558675
  },
  {
    "zone_region_id": "REG_263",
    "building_count": 7072,
    "mean_macro_gas_kwh": 284706.2795854046,
    "mean_macro_elec_kwh": 71135.0055050767,
    "mean_eui_gas": 148.1965071690855,
    "mean_clean_building_ratio": 93.4213221153846,
    "mean_electric_heating_adoption": 6.548661887211774,
    "mean_floor_area": 1944.8151356402368
  },
  {
    "zone_region_id": "REG_264",
    "building_count": 2121,
    "mean_macro_gas_kwh": 264194.197182002,
    "mean_macro_elec_kwh": 73515.69240641207,
    "mean_eui_gas": 154.30272887266608,
    "mean_clean_building_ratio": 94.22610561056106,
    "mean_electric_heating_adoption": 6.41150165731139,
    "mean_floor_area": 1740.3657461216003
  },
  {
    "zone_region_id": "REG_265",
    "building_count": 2729,
    "mean_macro_gas_kwh": 244197.4399880448,
    "mean_macro_elec_kwh": 67662.41194759986,
    "mean_eui_gas": 132.90185129876866,
    "mean_clean_building_ratio": 91.87327958959324,
    "mean_electric_heating_adoption": 4.1179045845994615,
    "mean_floor_area": 1862.215594783004
  },
  {
    "zone_region_id": "REG_266",
    "building_count": 2367,
    "mean_macro_gas_kwh": 250224.90806984509,
    "mean_macro_elec_kwh": 66613.23672623574,
    "mean_eui_gas": 148.89815027712967,
    "mean_clean_building_ratio": 92.951326573722,
    "mean_electric_heating_adoption": 6.157563171250359,
    "mean_floor_area": 1707.0272387704438
  },
  {
    "zone_region_id": "REG_267",
    "building_count": 1704,
    "mean_macro_gas_kwh": 277458.70623590425,
    "mean_macro_elec_kwh": 74705.7840581559,
    "mean_eui_gas": 135.16254674437255,
    "mean_clean_building_ratio": 93.16468896713616,
    "mean_electric_heating_adoption": 5.092606210146042,
    "mean_floor_area": 2082.528435374955
  },
  {
    "zone_region_id": "REG_268",
    "building_count": 1890,
    "mean_macro_gas_kwh": 263918.15588441794,
    "mean_macro_elec_kwh": 71940.3139063492,
    "mean_eui_gas": 137.15085881756977,
    "mean_clean_building_ratio": 92.90178306878306,
    "mean_electric_heating_adoption": 5.140225218270724,
    "mean_floor_area": 1950.5656960795247
  },
  {
    "zone_region_id": "REG_269",
    "building_count": 1801,
    "mean_macro_gas_kwh": 256494.4105855315,
    "mean_macro_elec_kwh": 68156.58732593004,
    "mean_eui_gas": 141.95088611357872,
    "mean_clean_building_ratio": 94.354169905608,
    "mean_electric_heating_adoption": 6.05278111415184,
    "mean_floor_area": 1822.929691789847
  },
  {
    "zone_region_id": "REG_270",
    "building_count": 4707,
    "mean_macro_gas_kwh": 241760.39932679012,
    "mean_macro_elec_kwh": 56811.87840726577,
    "mean_eui_gas": 173.6547759668723,
    "mean_clean_building_ratio": 88.97056086679413,
    "mean_electric_heating_adoption": 4.515430819185182,
    "mean_floor_area": 1432.177340617727
  },
  {
    "zone_region_id": "REG_271",
    "building_count": 1877,
    "mean_macro_gas_kwh": 211388.2541660292,
    "mean_macro_elec_kwh": 53556.79195101163,
    "mean_eui_gas": 168.32834192086182,
    "mean_clean_building_ratio": 94.16666489078315,
    "mean_electric_heating_adoption": 4.740046919618408,
    "mean_floor_area": 1331.1266425375038
  },
  {
    "zone_region_id": "REG_272",
    "building_count": 3447,
    "mean_macro_gas_kwh": 236277.34907103924,
    "mean_macro_elec_kwh": 58014.95920365535,
    "mean_eui_gas": 153.2315615943264,
    "mean_clean_building_ratio": 89.04051929213809,
    "mean_electric_heating_adoption": 3.854061697878533,
    "mean_floor_area": 1593.9792668538712
  },
  {
    "zone_region_id": "REG_273",
    "building_count": 6941,
    "mean_macro_gas_kwh": 234851.24989051343,
    "mean_macro_elec_kwh": 60501.85697046535,
    "mean_eui_gas": 154.9322379226875,
    "mean_clean_building_ratio": 87.21531191470969,
    "mean_electric_heating_adoption": 5.885656385558179,
    "mean_floor_area": 1562.871598111793
  },
  {
    "zone_region_id": "REG_274",
    "building_count": 3208,
    "mean_macro_gas_kwh": 210115.76444338236,
    "mean_macro_elec_kwh": 55982.835019638405,
    "mean_eui_gas": 142.98286239374855,
    "mean_clean_building_ratio": 91.0115866583541,
    "mean_electric_heating_adoption": 3.948136853574468,
    "mean_floor_area": 1520.6449617201386
  },
  {
    "zone_region_id": "REG_275",
    "building_count": 1967,
    "mean_macro_gas_kwh": 249729.3379554047,
    "mean_macro_elec_kwh": 57989.51516573462,
    "mean_eui_gas": 144.35233109994977,
    "mean_clean_building_ratio": 95.34775800711743,
    "mean_electric_heating_adoption": 3.8362371655855143,
    "mean_floor_area": 1807.0372447000711
  },
  {
    "zone_region_id": "REG_276",
    "building_count": 4,
    "mean_macro_gas_kwh": 162966.76773927355,
    "mean_macro_elec_kwh": 53666.4285,
    "mean_eui_gas": 92.48333379812128,
    "mean_clean_building_ratio": 100.0,
    "mean_electric_heating_adoption": 33.1682622284425,
    "mean_floor_area": 1728.1825773883045
  },
  {
    "zone_region_id": "REG_277",
    "building_count": 958,
    "mean_macro_gas_kwh": 282889.4815604435,
    "mean_macro_elec_kwh": 81217.69234133611,
    "mean_eui_gas": 146.86696308407338,
    "mean_clean_building_ratio": 78.38566805845511,
    "mean_electric_heating_adoption": 7.294448212519213,
    "mean_floor_area": 1968.7146590009647
  },
  {
    "zone_region_id": "REG_278",
    "building_count": 2538,
    "mean_macro_gas_kwh": 285772.8410115703,
    "mean_macro_elec_kwh": 69019.54024822696,
    "mean_eui_gas": 169.14361606116913,
    "mean_clean_building_ratio": 82.6398975571316,
    "mean_electric_heating_adoption": 7.49260047139511,
    "mean_floor_area": 1716.9835829030253
  },
  {
    "zone_region_id": "REG_279",
    "building_count": 1416,
    "mean_macro_gas_kwh": 281983.5565027684,
    "mean_macro_elec_kwh": 77593.41687076271,
    "mean_eui_gas": 135.12669944825396,
    "mean_clean_building_ratio": 74.35926553672317,
    "mean_electric_heating_adoption": 6.012327499649701,
    "mean_floor_area": 2138.8484338375456
  },
  {
    "zone_region_id": "REG_280",
    "building_count": 1807,
    "mean_macro_gas_kwh": 306686.39311575005,
    "mean_macro_elec_kwh": 73148.8929447137,
    "mean_eui_gas": 170.52249611092142,
    "mean_clean_building_ratio": 83.28473159933593,
    "mean_electric_heating_adoption": 8.353568250122729,
    "mean_floor_area": 1842.0636874500528
  },
  {
    "zone_region_id": "REG_281",
    "building_count": 2262,
    "mean_macro_gas_kwh": 272912.3972205681,
    "mean_macro_elec_kwh": 69254.46541025641,
    "mean_eui_gas": 141.03851084525854,
    "mean_clean_building_ratio": 79.91889036251105,
    "mean_electric_heating_adoption": 5.214505575041027,
    "mean_floor_area": 1967.6315639496568
  },
  {
    "zone_region_id": "REG_282",
    "building_count": 1015,
    "mean_macro_gas_kwh": 287941.4031763364,
    "mean_macro_elec_kwh": 78459.5065310345,
    "mean_eui_gas": 179.3875427503697,
    "mean_clean_building_ratio": 94.9144827586207,
    "mean_electric_heating_adoption": 8.693806922641294,
    "mean_floor_area": 1716.0720324053048
  },
  {
    "zone_region_id": "REG_283",
    "building_count": 2097,
    "mean_macro_gas_kwh": 296938.1557918581,
    "mean_macro_elec_kwh": 75487.88879160705,
    "mean_eui_gas": 158.30371787483935,
    "mean_clean_building_ratio": 81.0337672865999,
    "mean_electric_heating_adoption": 6.131220006892714,
    "mean_floor_area": 1914.2302919890096
  },
  {
    "zone_region_id": "REG_284",
    "building_count": 1886,
    "mean_macro_gas_kwh": 303636.1134961819,
    "mean_macro_elec_kwh": 75640.65502704136,
    "mean_eui_gas": 160.17088340373462,
    "mean_clean_building_ratio": 79.4673117709438,
    "mean_electric_heating_adoption": 7.676498538132034,
    "mean_floor_area": 1919.722314424549
  },
  {
    "zone_region_id": "REG_285",
    "building_count": 1950,
    "mean_macro_gas_kwh": 282078.906927445,
    "mean_macro_elec_kwh": 71415.52055897436,
    "mean_eui_gas": 153.5136369809327,
    "mean_clean_building_ratio": 77.33149230769232,
    "mean_electric_heating_adoption": 8.309578771736662,
    "mean_floor_area": 1881.0090728015905
  },
  {
    "zone_region_id": "REG_286",
    "building_count": 1415,
    "mean_macro_gas_kwh": 256939.17919561063,
    "mean_macro_elec_kwh": 70518.37361272085,
    "mean_eui_gas": 145.52706680274196,
    "mean_clean_building_ratio": 82.80063604240283,
    "mean_electric_heating_adoption": 6.972083594484795,
    "mean_floor_area": 1799.2488664818366
  },
  {
    "zone_region_id": "REG_287",
    "building_count": 1062,
    "mean_macro_gas_kwh": 275943.48619036586,
    "mean_macro_elec_kwh": 78248.03587382298,
    "mean_eui_gas": 149.287045665744,
    "mean_clean_building_ratio": 93.05077212806026,
    "mean_electric_heating_adoption": 9.68984667997917,
    "mean_floor_area": 1901.2442260168823
  },
  {
    "zone_region_id": "REG_288",
    "building_count": 859,
    "mean_macro_gas_kwh": 310380.3891316245,
    "mean_macro_elec_kwh": 85195.77830267754,
    "mean_eui_gas": 166.9464099051363,
    "mean_clean_building_ratio": 96.37637951105935,
    "mean_electric_heating_adoption": 7.693105040872362,
    "mean_floor_area": 1921.7460371724217
  },
  {
    "zone_region_id": "REG_289",
    "building_count": 1277,
    "mean_macro_gas_kwh": 320760.18955874775,
    "mean_macro_elec_kwh": 81580.96511119812,
    "mean_eui_gas": 166.297957458439,
    "mean_clean_building_ratio": 91.06480031323414,
    "mean_electric_heating_adoption": 7.351805360904614,
    "mean_floor_area": 1955.373795554885
  },
  {
    "zone_region_id": "REG_290",
    "building_count": 1623,
    "mean_macro_gas_kwh": 309214.3016140074,
    "mean_macro_elec_kwh": 67801.56325878004,
    "mean_eui_gas": 166.8678807717272,
    "mean_clean_building_ratio": 77.92385089340728,
    "mean_electric_heating_adoption": 6.170945601998588,
    "mean_floor_area": 1883.4006893286064
  },
  {
    "zone_region_id": "REG_291",
    "building_count": 1536,
    "mean_macro_gas_kwh": 270018.8251254584,
    "mean_macro_elec_kwh": 74624.89887890626,
    "mean_eui_gas": 133.24083058926837,
    "mean_clean_building_ratio": 71.74443359375,
    "mean_electric_heating_adoption": 4.74445861338988,
    "mean_floor_area": 2059.4707195705164
  },
  {
    "zone_region_id": "REG_292",
    "building_count": 1801,
    "mean_macro_gas_kwh": 268070.5966619962,
    "mean_macro_elec_kwh": 68956.62874525004,
    "mean_eui_gas": 148.54297421742086,
    "mean_clean_building_ratio": 73.5004275402554,
    "mean_electric_heating_adoption": 6.671121958391969,
    "mean_floor_area": 1835.8912973533547
  },
  {
    "zone_region_id": "REG_293",
    "building_count": 1262,
    "mean_macro_gas_kwh": 301254.1299470682,
    "mean_macro_elec_kwh": 79022.62636767037,
    "mean_eui_gas": 152.42558618995963,
    "mean_clean_building_ratio": 77.32944532488114,
    "mean_electric_heating_adoption": 8.280436323813403,
    "mean_floor_area": 2013.598472731834
  },
  {
    "zone_region_id": "REG_294",
    "building_count": 1093,
    "mean_macro_gas_kwh": 266756.37808624376,
    "mean_macro_elec_kwh": 70538.57949222325,
    "mean_eui_gas": 152.9059507120353,
    "mean_clean_building_ratio": 94.2872461116194,
    "mean_electric_heating_adoption": 8.231876308185061,
    "mean_floor_area": 1831.241609752552
  },
  {
    "zone_region_id": "REG_295",
    "building_count": 839,
    "mean_macro_gas_kwh": 300631.8953508095,
    "mean_macro_elec_kwh": 93454.01615971394,
    "mean_eui_gas": 178.64899478531925,
    "mean_clean_building_ratio": 97.38725864123955,
    "mean_electric_heating_adoption": 10.951351436967052,
    "mean_floor_area": 1828.626673435652
  },
  {
    "zone_region_id": "REG_296",
    "building_count": 959,
    "mean_macro_gas_kwh": 289931.2540827803,
    "mean_macro_elec_kwh": 75990.60065797706,
    "mean_eui_gas": 145.0658986545049,
    "mean_clean_building_ratio": 79.45098018769552,
    "mean_electric_heating_adoption": 8.014319528268569,
    "mean_floor_area": 2011.6195707999864
  },
  {
    "zone_region_id": "REG_297",
    "building_count": 1769,
    "mean_macro_gas_kwh": 263846.41150545253,
    "mean_macro_elec_kwh": 69805.66785245901,
    "mean_eui_gas": 150.89305669506206,
    "mean_clean_building_ratio": 92.58543810062184,
    "mean_electric_heating_adoption": 7.362867474216375,
    "mean_floor_area": 1786.2356875202713
  },
  {
    "zone_region_id": "REG_298",
    "building_count": 1522,
    "mean_macro_gas_kwh": 288669.05892521614,
    "mean_macro_elec_kwh": 76397.98607950065,
    "mean_eui_gas": 150.37397766352657,
    "mean_clean_building_ratio": 87.80931668856768,
    "mean_electric_heating_adoption": 7.026815708491202,
    "mean_floor_area": 1941.0593120796864
  },
  {
    "zone_region_id": "REG_299",
    "building_count": 1115,
    "mean_macro_gas_kwh": 314996.9493742514,
    "mean_macro_elec_kwh": 82604.76871838566,
    "mean_eui_gas": 157.28122710055965,
    "mean_clean_building_ratio": 80.54680717488789,
    "mean_electric_heating_adoption": 6.570371584025566,
    "mean_floor_area": 2026.890911258157
  },
  {
    "zone_region_id": "REG_300",
    "building_count": 1077,
    "mean_macro_gas_kwh": 326654.5899629154,
    "mean_macro_elec_kwh": 90105.4294466223,
    "mean_eui_gas": 148.09149340231136,
    "mean_clean_building_ratio": 90.16978644382544,
    "mean_electric_heating_adoption": 8.53522476718908,
    "mean_floor_area": 2237.8926412803694
  },
  {
    "zone_region_id": "REG_301",
    "building_count": 1397,
    "mean_macro_gas_kwh": 341344.1852928513,
    "mean_macro_elec_kwh": 84410.92429062276,
    "mean_eui_gas": 154.68101264792986,
    "mean_clean_building_ratio": 79.9524624194703,
    "mean_electric_heating_adoption": 6.600890685400056,
    "mean_floor_area": 2247.3521730453926
  },
  {
    "zone_region_id": "REG_302",
    "building_count": 1315,
    "mean_macro_gas_kwh": 287101.2305686679,
    "mean_macro_elec_kwh": 74385.70762281369,
    "mean_eui_gas": 151.3878854180127,
    "mean_clean_building_ratio": 85.7287680608365,
    "mean_electric_heating_adoption": 6.0449057264860375,
    "mean_floor_area": 1891.8652457485464
  },
  {
    "zone_region_id": "REG_303",
    "building_count": 1262,
    "mean_macro_gas_kwh": 238020.87064861355,
    "mean_macro_elec_kwh": 67866.49916323296,
    "mean_eui_gas": 140.66665929937946,
    "mean_clean_building_ratio": 91.38460380348651,
    "mean_electric_heating_adoption": 10.993215678736934,
    "mean_floor_area": 1722.4713561108588
  },
  {
    "zone_region_id": "REG_304",
    "building_count": 1140,
    "mean_macro_gas_kwh": 283241.3091176374,
    "mean_macro_elec_kwh": 74241.37387894737,
    "mean_eui_gas": 142.83395767467383,
    "mean_clean_building_ratio": 77.81695614035088,
    "mean_electric_heating_adoption": 7.822702651968991,
    "mean_floor_area": 2016.614088649819
  },
  {
    "zone_region_id": "REG_305",
    "building_count": 836,
    "mean_macro_gas_kwh": 221026.7707275345,
    "mean_macro_elec_kwh": 64007.20686961723,
    "mean_eui_gas": 141.1525930210218,
    "mean_clean_building_ratio": 89.42142344497607,
    "mean_electric_heating_adoption": 14.514580975836038,
    "mean_floor_area": 1704.6064417095915
  },
  {
    "zone_region_id": "REG_306",
    "building_count": 1046,
    "mean_macro_gas_kwh": 329490.09482077195,
    "mean_macro_elec_kwh": 85038.8867829828,
    "mean_eui_gas": 148.59439868357873,
    "mean_clean_building_ratio": 85.69725621414914,
    "mean_electric_heating_adoption": 6.916672563005542,
    "mean_floor_area": 2234.489828259826
  },
  {
    "zone_region_id": "REG_307",
    "building_count": 1795,
    "mean_macro_gas_kwh": 310548.2566568728,
    "mean_macro_elec_kwh": 81115.40321225626,
    "mean_eui_gas": 155.68909848829963,
    "mean_clean_building_ratio": 93.76251253481894,
    "mean_electric_heating_adoption": 7.432372342202734,
    "mean_floor_area": 2032.0772005041315
  },
  {
    "zone_region_id": "REG_308",
    "building_count": 794,
    "mean_macro_gas_kwh": 271225.7557795166,
    "mean_macro_elec_kwh": 80611.8187858942,
    "mean_eui_gas": 163.25664767305838,
    "mean_clean_building_ratio": 97.61137279596976,
    "mean_electric_heating_adoption": 12.591424832094258,
    "mean_floor_area": 1796.5029173120913
  },
  {
    "zone_region_id": "REG_309",
    "building_count": 248,
    "mean_macro_gas_kwh": 166201.28222450393,
    "mean_macro_elec_kwh": 54908.668866935484,
    "mean_eui_gas": 117.44234588364364,
    "mean_clean_building_ratio": 96.49116935483872,
    "mean_electric_heating_adoption": 4.293688527846376,
    "mean_floor_area": 1514.1323405059711
  },
  {
    "zone_region_id": "REG_310",
    "building_count": 503,
    "mean_macro_gas_kwh": 159359.85707410387,
    "mean_macro_elec_kwh": 51688.89929821074,
    "mean_eui_gas": 122.10744629045298,
    "mean_clean_building_ratio": 94.11956262425448,
    "mean_electric_heating_adoption": 7.001753995081744,
    "mean_floor_area": 1387.4971111540754
  },
  {
    "zone_region_id": "REG_311",
    "building_count": 956,
    "mean_macro_gas_kwh": 180422.89374014208,
    "mean_macro_elec_kwh": 52019.95639958159,
    "mean_eui_gas": 113.35840627858728,
    "mean_clean_building_ratio": 96.02823221757323,
    "mean_electric_heating_adoption": 3.630120523531746,
    "mean_floor_area": 1652.672621768003
  },
  {
    "zone_region_id": "REG_312",
    "building_count": 750,
    "mean_macro_gas_kwh": 166042.6073276814,
    "mean_macro_elec_kwh": 48931.499144,
    "mean_eui_gas": 115.92673170930928,
    "mean_clean_building_ratio": 96.47094666666668,
    "mean_electric_heating_adoption": 3.797162531049023,
    "mean_floor_area": 1495.3413793216096
  },
  {
    "zone_region_id": "REG_313",
    "building_count": 1228,
    "mean_macro_gas_kwh": 177874.9844669673,
    "mean_macro_elec_kwh": 53342.54710667753,
    "mean_eui_gas": 122.69549864678616,
    "mean_clean_building_ratio": 91.01381107491858,
    "mean_electric_heating_adoption": 2.551711267016972,
    "mean_floor_area": 1510.4144562235876
  },
  {
    "zone_region_id": "REG_314",
    "building_count": 1295,
    "mean_macro_gas_kwh": 174516.90131062153,
    "mean_macro_elec_kwh": 52511.93463629344,
    "mean_eui_gas": 128.1500042540151,
    "mean_clean_building_ratio": 95.89115057915058,
    "mean_electric_heating_adoption": 3.5934779681129494,
    "mean_floor_area": 1397.0952963918674
  },
  {
    "zone_region_id": "REG_315",
    "building_count": 135,
    "mean_macro_gas_kwh": 176798.52330399875,
    "mean_macro_elec_kwh": 55503.1307037037,
    "mean_eui_gas": 121.62453400989084,
    "mean_clean_building_ratio": 95.42740740740742,
    "mean_electric_heating_adoption": 8.928937017905534,
    "mean_floor_area": 1496.6721431035674
  },
  {
    "zone_region_id": "REG_316",
    "building_count": 637,
    "mean_macro_gas_kwh": 175353.4641121963,
    "mean_macro_elec_kwh": 53844.69987284144,
    "mean_eui_gas": 115.36745149337222,
    "mean_clean_building_ratio": 92.45097331240189,
    "mean_electric_heating_adoption": 4.187581875299002,
    "mean_floor_area": 1622.2567888762346
  },
  {
    "zone_region_id": "REG_317",
    "building_count": 712,
    "mean_macro_gas_kwh": 214793.95935687333,
    "mean_macro_elec_kwh": 59263.4344985955,
    "mean_eui_gas": 119.68485446488758,
    "mean_clean_building_ratio": 93.57629213483148,
    "mean_electric_heating_adoption": 3.19923199604107,
    "mean_floor_area": 1837.3904643113783
  },
  {
    "zone_region_id": "REG_318",
    "building_count": 1542,
    "mean_macro_gas_kwh": 238674.649910963,
    "mean_macro_elec_kwh": 64134.55187483787,
    "mean_eui_gas": 119.2875769681043,
    "mean_clean_building_ratio": 83.89555123216601,
    "mean_electric_heating_adoption": 3.5325941633804727,
    "mean_floor_area": 2057.441930550277
  },
  {
    "zone_region_id": "REG_319",
    "building_count": 954,
    "mean_macro_gas_kwh": 204368.6340614523,
    "mean_macro_elec_kwh": 56305.44266037736,
    "mean_eui_gas": 114.8469035758876,
    "mean_clean_building_ratio": 80.16364779874213,
    "mean_electric_heating_adoption": 2.850217338879589,
    "mean_floor_area": 1832.003525703665
  },
  {
    "zone_region_id": "REG_320",
    "building_count": 1051,
    "mean_macro_gas_kwh": 250678.43396897885,
    "mean_macro_elec_kwh": 69108.24206374881,
    "mean_eui_gas": 131.2861755103077,
    "mean_clean_building_ratio": 90.8242435775452,
    "mean_electric_heating_adoption": 2.3705654732192,
    "mean_floor_area": 1951.1369494185185
  },
  {
    "zone_region_id": "REG_321",
    "building_count": 1049,
    "mean_macro_gas_kwh": 222002.3758040495,
    "mean_macro_elec_kwh": 65148.77006387036,
    "mean_eui_gas": 123.58704168320884,
    "mean_clean_building_ratio": 92.68402287893232,
    "mean_electric_heating_adoption": 3.530609036002029,
    "mean_floor_area": 1865.6783150819028
  },
  {
    "zone_region_id": "REG_322",
    "building_count": 2796,
    "mean_macro_gas_kwh": 243404.04489200495,
    "mean_macro_elec_kwh": 68037.20031902718,
    "mean_eui_gas": 124.23027413993688,
    "mean_clean_building_ratio": 89.39765379113018,
    "mean_electric_heating_adoption": 4.993469153628663,
    "mean_floor_area": 2003.398187011976
  },
  {
    "zone_region_id": "REG_323",
    "building_count": 1802,
    "mean_macro_gas_kwh": 257376.97595515708,
    "mean_macro_elec_kwh": 65234.0902691454,
    "mean_eui_gas": 145.13112547426823,
    "mean_clean_building_ratio": 92.88006104328524,
    "mean_electric_heating_adoption": 2.2538763059562,
    "mean_floor_area": 1840.582373646451
  },
  {
    "zone_region_id": "REG_324",
    "building_count": 1493,
    "mean_macro_gas_kwh": 251060.4940854832,
    "mean_macro_elec_kwh": 65627.8106664434,
    "mean_eui_gas": 142.5595860791306,
    "mean_clean_building_ratio": 92.4552109845948,
    "mean_electric_heating_adoption": 1.9894218891895927,
    "mean_floor_area": 1816.697259161265
  },
  {
    "zone_region_id": "REG_325",
    "building_count": 562,
    "mean_macro_gas_kwh": 244027.1317722024,
    "mean_macro_elec_kwh": 58918.57187544484,
    "mean_eui_gas": 147.6942653968566,
    "mean_clean_building_ratio": 93.34948398576512,
    "mean_electric_heating_adoption": 2.16027268890666,
    "mean_floor_area": 1717.7046633274306
  },
  {
    "zone_region_id": "REG_326",
    "building_count": 915,
    "mean_macro_gas_kwh": 197506.788154984,
    "mean_macro_elec_kwh": 54362.703427322405,
    "mean_eui_gas": 132.3101139398871,
    "mean_clean_building_ratio": 95.44346448087433,
    "mean_electric_heating_adoption": 2.323355782595808,
    "mean_floor_area": 1523.3999320296696
  },
  {
    "zone_region_id": "REG_327",
    "building_count": 656,
    "mean_macro_gas_kwh": 198214.41329613756,
    "mean_macro_elec_kwh": 56112.01675914635,
    "mean_eui_gas": 131.0999296765475,
    "mean_clean_building_ratio": 94.23224085365854,
    "mean_electric_heating_adoption": 3.6416001303995182,
    "mean_floor_area": 1587.096703049333
  },
  {
    "zone_region_id": "REG_328",
    "building_count": 1285,
    "mean_macro_gas_kwh": 223958.6340384477,
    "mean_macro_elec_kwh": 64021.963191439696,
    "mean_eui_gas": 138.1166398012047,
    "mean_clean_building_ratio": 96.24373540856033,
    "mean_electric_heating_adoption": 4.143293975258959,
    "mean_floor_area": 1704.7124683757752
  },
  {
    "zone_region_id": "REG_329",
    "building_count": 415,
    "mean_macro_gas_kwh": 163737.14279126964,
    "mean_macro_elec_kwh": 48269.75704096385,
    "mean_eui_gas": 126.452470805998,
    "mean_clean_building_ratio": 94.87120481927712,
    "mean_electric_heating_adoption": 5.707872405959684,
    "mean_floor_area": 1358.6569484590648
  },
  {
    "zone_region_id": "REG_330",
    "building_count": 535,
    "mean_macro_gas_kwh": 237343.94247731016,
    "mean_macro_elec_kwh": 55953.70767476635,
    "mean_eui_gas": 156.50689568249908,
    "mean_clean_building_ratio": 93.15889719626168,
    "mean_electric_heating_adoption": 2.4412942778016524,
    "mean_floor_area": 1562.1069966438918
  }
],
  report: {
  "competition": "DICE FEST 2026",
  "team": "opo yo",
  "institution": "Universitas Negeri Surabaya (UNESA)",
  "final_cv_column_wise_nrmse": 0.25685,
  "public_leaderboard_nrmse": 0.25457,
  "official_sigmas": {
    "target_macro_gas_kwh": 151750.04,
    "target_macro_elec_kwh": 41725.37,
    "target_eui_gas_kwh_per_sqm": 40.65,
    "target_clean_building_ratio": 12.49,
    "target_electric_heating_adoption": 7.18
  },
  "targets_breakdown": {
    "target_macro_gas_kwh": {
      "rmse": 38069.35,
      "sigma": 151750.04,
      "nrmse": 0.25087,
      "error_pct": 19.53
    },
    "target_macro_elec_kwh": {
      "rmse": 13325.84,
      "sigma": 41725.37,
      "nrmse": 0.31937,
      "error_pct": 24.87
    },
    "target_eui_gas_kwh_per_sqm": {
      "rmse": 26.85,
      "sigma": 40.65,
      "nrmse": 0.66051,
      "error_pct": 51.43
    },
    "target_clean_building_ratio": {
      "rmse": 0.0005,
      "sigma": 12.49,
      "nrmse": 4e-05,
      "error_pct": 0.0
    },
    "target_electric_heating_adoption": {
      "rmse": 0.38,
      "sigma": 7.18,
      "nrmse": 0.05345,
      "error_pct": 4.16
    }
  }
}
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CASCADE_DATA;
}

var CASCADE_DATA = window.CASCADE_DATA;
