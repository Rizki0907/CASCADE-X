// CASCADE-X National Energy Transition Intelligence Data Store
const CASCADE_DATA = {
  metadata: {
    team: 'opo yo',
    institution: 'FMIPA Universitas Negeri Surabaya',
    competition: 'DICE FEST 2026 Machine Learning Competition',
    organizer: 'HMPS Sains Data UIN Raden Mas Said Surakarta',
    rank: 'Rank #1 Nasional (Preliminary Round)',
    cv_score: 0.26331,
    public_lb_score: 0.25971,
    total_samples: 429303,
    total_features: 201,
    num_zones: 329
  },
  targets: {
    target_macro_gas_kwh: {
      name: 'Total Konsumsi Gas Makro',
      unit: 'kWh/tahun',
      sigma: 151750.04,
      nrmse: 0.25454,
      rmse: 38626.46,
      mean: 230372.0,
      min: 4324,
      max: 999765,
      color: '#ff9f43'
    },
    target_macro_elec_kwh: {
      name: 'Proyeksi Beban Listrik Makro',
      unit: 'kWh/tahun',
      sigma: 41725.37,
      nrmse: 0.32198,
      rmse: 13434.73,
      mean: 63756.0,
      min: 2968,
      max: 396492,
      color: '#00d2ff'
    },
    target_eui_gas_kwh_per_sqm: {
      name: 'Intensitas Energi Gas (EUI)',
      unit: 'kWh/m²',
      sigma: 40.65,
      nrmse: 0.66685,
      rmse: 27.107,
      mean: 139.06,
      min: 5.12,
      max: 648.11,
      color: '#0ea5e9'
    },
    target_clean_building_ratio: {
      name: 'Proporsi Bangunan Bersertifikasi Hijau',
      unit: '%',
      sigma: 12.49,
      nrmse: 0.01323,
      rmse: 0.1652,
      mean: 90.76,
      min: 8.33,
      max: 100.0,
      color: '#00f5a0'
    },
    target_electric_heating_adoption: {
      name: 'Tingkat Adopsi Pemanas Listrik / Heat Pump',
      unit: '%',
      sigma: 7.18,
      nrmse: 0.05994,
      rmse: 0.4304,
      mean: 5.38,
      min: 0.0,
      max: 93.24,
      color: '#10b981'
    }
  },
  experiment_evolution: [
    { id: 'Run 1 (Baseline)', cv: 0.28043, lb: 0.28410, model: 'Baseline LightGBM Default', date: '12 Okt 2026', desc: 'Model dasar pohon GBDT tunggal tanpa rekayasa fisika' },
    { id: 'Run 2 (Habib Run 2)', cv: 0.28887, lb: 0.27769, model: 'Tri-Model GBDT + Harmonic Coupling', date: '13 Okt 2026', desc: 'Form factor, compactness, dan integrasi HVAC bauran' },
    { id: 'Run 3 (Dicefest-3)', cv: 0.28976, lb: 0.28445, model: 'GBDT + TabResNet + Huber Loss EUI', date: '13 Okt 2026', desc: 'Uji coba Huber Loss pada EUI (Gagal, galat membesar)' },
    { id: 'Run 4 (Habib Run 4)', cv: 0.28776, lb: 0.27754, model: 'LightGBM + CatBoost + Cascaded Gas->Elec', date: '13 Okt 2026', desc: 'Injeksi proyeksi gas ke model beban listrik' },
    { id: 'Exp 1 (Piji Exp 1)', cv: 0.28745, lb: 0.27795, model: 'Tri-Model GBDT + Adaptive Coupling', date: '14 Okt 2026', desc: 'Harmonic coupling adaptif pada EUI Gas' },
    { id: 'Exp 2 (Piji Exp 2)', cv: 0.28685, lb: 0.27795, model: 'Decoupled Dual-Ensemble + SLSQP Coupling', date: '14 Okt 2026', desc: 'Optimal closed-form coupling via SLSQP solver' },
    { id: 'Exp 4 (Piji Exp 4)', cv: 0.28749, lb: 0.27854, model: 'Two-Stage True OOF Stacking + Physics Imputation', date: '14 Okt 2026', desc: 'Rekor gas, listrik, dan EUI serentak' },
    { id: 'Exp 6 (Piji Exp 6)', cv: 0.26549, lb: 0.26180, model: 'Stratified 5-Fold + LOO Target Encoding + Exact Subzone', date: '14 Okt 2026', desc: 'Terobosan 91.86% exact subzone match heat pump' },
    { id: 'Exp 8 (Piji Exp 8)', cv: 0.26331, lb: 0.25971, model: 'Tri-Model Diversity + Nested Inner OOF + Decile SLSQP', date: '15 Okt 2026', desc: 'Menembus batas sub-0.260 rekor all-time tim!' },
    { id: 'Exp 18 (Submission Final)', cv: 0.26331, lb: 0.25971, model: 'Production Pipeline + Full Artifact Bundle Extraction', date: '20 Okt 2026', desc: 'Model final terevaluasi lengkap dengan XAI TreeSHAP' }
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
    "intervention": "Insulasi Dinding Pejal",
    "marginal_abatement_cost_eur_per_tco2": -25.0,
    "abatement_potential_kton_co2": 180.5,
    "payback_period_years": 6.8
  },
  {
    "intervention": "Elektrifikasi Heat Pump",
    "marginal_abatement_cost_eur_per_tco2": 15.4,
    "abatement_potential_kton_co2": 340.2,
    "payback_period_years": 11.2
  },
  {
    "intervention": "Kaca Ganda Efisiensi Tinggi",
    "marginal_abatement_cost_eur_per_tco2": 45.2,
    "abatement_potential_kton_co2": 95.0,
    "payback_period_years": 14.5
  },
  {
    "intervention": "Jaringan Distrik Hibrida",
    "marginal_abatement_cost_eur_per_tco2": 78.0,
    "abatement_potential_kton_co2": 140.8,
    "payback_period_years": 22.0
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
