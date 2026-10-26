# CASCADE-X: National Urban Energy Transition Intelligence Platform
### Multi-Target Physics-Informed Gradient Boosting Machine Learning Framework with Spatial Relative Conditioning and Cascaded Macro-Micro Energy Coupling

[![Competition](https://img.shields.io/badge/Competition-DICE%20FEST%202026-00D2FF.svg)](https://www.kaggle.com/competitions)
[![Rank](https://img.shields.io/badge/Preliminary%20Rank-%231%20National-00F5A0.svg)](#)
[![CV Score](https://img.shields.io/badge/CV%20NRMSE-0.25685-brightgreen.svg)](#)
[![Public LB](https://img.shields.io/badge/Public%20LB-0.25457-blue.svg)](#)
[![Physics Consistency](https://img.shields.io/badge/Thermodynamic%20EUI%20Consistency-100.000%25-orange.svg)](#)

---

## 🏆 Profil Tim & Kompetisi
* **Nama Tim:** opo yo
* **Anggota:** Muhammad Habib Nur Aiman & Rizki Piji Fathoni
* **Institusi:** Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA), Universitas Negeri Surabaya
* **Penyelenggara:** Himpunan Mahasiswa Program Studi (HMPS) Sains Data, Fakultas Sains dan Teknologi, UIN Raden Mas Said Surakarta
* **Tema Kompetisi:** *"Building Smart, Secure, and Sustainable Digital Ecosystems"*
* **Capaian:** **Peringkat #1 Nasional Babak Penyisihan (Kaggle & Academic Writeup)**

---

## ⚡ Ikhtisar CASCADE-X
**CASCADE-X** (*Coupled Adaptive Spatial-Energy Calculation & Analytics for Decarbonization Ecosystems*) adalah platform intelijen dan sistem pendukung keputusan (*Decision Support System*) transisi energi perkotaan nasional. 

Platform ini memecahkan **The Urban Energy Transition Trilemma** melalui pemodelan *Multi-Output Regression* yang memprediksi 5 target energi nasional secara simultan dengan ketaatan mutlak terhadap hukum termodinamika fisika bangunan:
1. `target_macro_gas_kwh`: Total konsumsi gas fosil tahunan ($kWh/\text{tahun}$) — NRMSE **0.24840**
2. `target_macro_elec_kwh`: Proyeksi beban listrik makro tahunan ($kWh/\text{tahun}$) — NRMSE **0.31944**
3. `target_eui_gas_kwh_per_sqm`: Intensitas energi gas per meter persegi lantai ($kWh/m^2$) — NRMSE **0.64969**
4. `target_clean_building_ratio`: Proporsi bangunan bersertifikasi hijau ($\%$) — NRMSE **0.01361**
5. `target_electric_heating_adoption`: Tingkat penetrasi pemanas listrik / *Heat Pump* ($\%$) — NRMSE **0.05292**

---

## 🔬 Terobosan Kunci Arsitektur Model

1. **Laboratorium Determinisme Fisika (100.000% Konsistensi Termodinamika):**
   $$\text{target\_eui\_gas\_kwh\_per\_sqm} \equiv \frac{\text{target\_macro\_gas\_kwh}}{\text{bld\_dim\_06}}$$
   Korelasi sempurna ($R^2 = 1.000000$, deviasi maksimal $1.7 \times 10^{-13}$) di seluruh 429,303 sampel data latih, dikunci via *Decile-Adaptive SLSQP Closed-Form Coupling*.

2. **Cascaded Macro-Micro Energy Coupling (+0.887 Korelasi Gas-Listrik):**
   Injeksi proyeksi pengalihan beban pemanas gas ke beban listrik puncak trafo gardu induk PLN secara alami menangkap korelasi kuat lintas sektor.

3. **Stratified Spatial Relativity & Leak-Free Empirical Bayes LOO:**
   Validasi *Stratified 5-Fold GroupKFold* pada 329 klaster wilayah metropolitan dengan resolusi *exact subzone lookup* pada 91.86% data uji untuk adopsi *Heat Pump* (NRMSE historis 0.05292).

---

## 💻 Fitur Utama Web Dashboard
1. **Overview & Kokpit Eksekutif:** Visualisasi 3D Mesh Wireframe Kota & Jaringan Energi Interaktif 60 FPS.
2. **Eksplorasi Data & Heterogenitas Spasial:** Analisis sebaran 5 target, korelasi Pearson/Spearman, visualisasi interaktif Plotly + mode toggle PNG, dan penjelajah 329 zona metropolitan.
3. **Arsitektur Model & Benchmark Evolusi:** Perbandingan historis 18 eksperimen tim dari Baseline (CV 0.28043) hingga rekor nasional (CV 0.25685, LB 0.25457).
4. **Interpretabilitas XAI & Solusi Kebijakan Publik:** Kepentingan fitur global, TreeSHAP marginal attribution, Kurva MACC (*Marginal Abatement Cost Curve*), dan Roadmap Nasional 10 Tahun (2026–2035).
5. **The What-If Policy Simulator:** Simulator interaktif berkecepatan komputasi $< 10\text{ ms}$ dengan verifikasi lampu hijau termodinamika dan rekomendasi kebijakan otomatis.
6. **Dual Mode Design System:** Dukungan *Dark Mode* dan *Light Mode* penuh dengan palet warna resmi *Electric Cyan*, *Sustainable Mint*, dan *Deep Void Navy*.

---

## 🚀 Panduan Menjalankan Dashboard Lokal
Dashboard dibangun secara mandiri (*standalone zero-dependency*) menggunakan Vanilla HTML5, CSS3, dan JavaScript modular ES6:

```bash
# Clone repositori
git clone https://github.com/Rizki0907/CASCADE-X.git
cd CASCADE-X

# Buka langsung di browser favorit Anda
start index.html  # Windows
open index.html   # macOS
```
Atau jalankan via static web server:
```bash
python -m http.server 8000
# Akses di peramban: http://localhost:8000
```

---
*DICE FEST 2026 Machine Learning Competition &bull; Tim "opo yo" (Muhammad Habib Nur Aiman & Rizki Piji Fathoni)*
