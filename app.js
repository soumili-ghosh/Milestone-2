// Healthcare Application JavaScript

// Application Data
const appData = {
  samplePatients: [
    { id: 1, name: "John Doe", age: 45, gender: "Male", conditions: ["Pneumonia"] },
    { id: 2, name: "Jane Smith", age: 38, gender: "Female", conditions: ["Brain Tumor"] }
  ],
  diseaseDatabase: {
    "common cold": ["Paracetamol", "Cetirizine", "Phenylephrine"],
        "influenza": ["Oseltamivir", "Paracetamol"],
        "fever": ["Paracetamol"],
        "hypertension": ["Amlodipine", "Losartan"],
        "type 2 diabetes": ["Metformin", "Glimepiride"],
        "urinary tract infection": ["Nitrofurantoin", "Ciprofloxacin"],
        "bacterial pneumonia": ["Amoxicillin", "Azithromycin"],
        "asthma": ["Salbutamol inhaler", "Budesonide inhaler"],
        "gastroesophageal reflux": ["Omeprazole", "Antacid"],
        "migraine": ["Sumatriptan", "Ibuprofen"],
        "bronchitis": ["Doxycycline", "Salbutamol inhaler"],
        "allergic rhinitis": ["Cetirizine", "Loratadine"],
        "depression": ["Fluoxetine", "Sertraline"],
        "anxiety": ["Diazepam", "Alprazolam"],
        "epilepsy": ["Carbamazepine", "Valproate"],
        "tuberculosis": ["Isoniazid", "Rifampicin", "Pyrazinamide", "Ethambutol"],
        "malaria": ["Chloroquine", "Artemether-Lumefantrine"],
        "hepatitis b": ["Tenofovir", "Entecavir"],
        "covid-19": ["Remdesivir", "Paracetamol"],
        "hyperlipidemia": ["Atorvastatin", "Rosuvastatin"],
        "osteoporosis": ["Alendronate", "Calcium supplements"],
        "rheumatoid arthritis": ["Methotrexate", "Hydroxychloroquine"],
        "parkinson's disease": ["Levodopa", "Carbidopa"],
        "thyroid disorder": ["Levothyroxine"],
        "angina": ["Nitroglycerin", "Aspirin"],
        "heart failure": ["Furosemide", "Digoxin"],
    "pneumonia": ["Azithromycin", "Amoxicillin"],
    "tuberculosis": ["Isoniazid", "Rifampicin", "Pyrazinamide", "Ethambutol"],
    "covid-19": ["Remdesivir", "Paracetamol"],
    "lung cancer": ["Cisplatin", "Etoposide"],
    "pleural effusion": ["Diuretics", "Thoracentesis (procedure)"],
    "copd": ["Salbutamol inhaler", "Tiotropium inhaler"],
    "atelectasis": ["Chest physiotherapy", "Bronchodilators"],
    "pulmonary fibrosis": ["Pirfenidone", "Nintedanib"],
    "pneumothorax": ["Chest tube drainage", "Oxygen therapy"],
    "bone fracture": ["Analgesics", "Calcium supplements"],
    "osteoporosis": ["Alendronate", "Calcium supplements"],
    "bone tumor": ["Methotrexate", "Cisplatin"],
    "arthritis": ["Ibuprofen", "Naproxen"],
    "scoliosis": ["Physiotherapy", "Bracing"],
    "osteomyelitis": ["Ceftriaxone", "Vancomycin"],
    "tooth decay": ["Fluoride toothpaste", "Dental filling (procedure)"],
    "gum disease": ["Chlorhexidine mouthwash", "Scaling & root planing"],
    "impacted teeth": ["Surgical extraction", "Analgesics"],
    "jaw fracture": ["Analgesics", "Surgical fixation"],
    "dental abscess": ["Amoxicillin-Clavulanate", "Incision & drainage"],
    "tmj disorder": ["NSAIDs", "Muscle relaxants"],
    "glioma": ["Temozolomide", "Radiotherapy"],
    "meningioma": ["Surgical removal", "Radiotherapy"],
    "pituitary adenoma": ["Cabergoline", "Surgery"],
    "stroke": ["Aspirin", "Clopidogrel"],
    "alzheimer's disease": ["Donepezil", "Memantine"],
    "multiple sclerosis": ["Interferon beta", "Fingolimod"],
    "epilepsy": ["Carbamazepine", "Valproate"],
    "hydrocephalus": ["Shunt placement (procedure)"],
    "traumatic brain injury": ["Mannitol", "Surgery if required"],
    "cerebral aneurysm": ["Endovascular coiling", "Surgical clipping"],
    "herniated disc": ["Ibuprofen", "Muscle relaxants"],
    "spinal stenosis": ["Gabapentin", "Physiotherapy"],
    "spinal tumor": ["Surgical removal", "Radiotherapy"],
    "degenerative disc disease": ["NSAIDs", "Physical therapy"],
    "syringomyelia": ["Surgical decompression"],
    "acl tear": ["Surgery (reconstruction)", "Physiotherapy"],
    "meniscus injury": ["Arthroscopy (surgery)", "NSAIDs"],
    "rotator cuff tear": ["Physiotherapy", "Surgical repair"],
    "muscle atrophy": ["Physiotherapy", "Nutritional supplements"],
    "tendonitis": ["NSAIDs", "Rest and physiotherapy"],
    "osteomyelitis (mri)": ["Ceftriaxone", "Surgical drainage"],
    "tumor": ["Methotrexate", "Cisplatin"] ,
    "liver cirrhosis": ["Propranolol", "Lactulose"],
    "liver cancer": ["Sorafenib", "Surgical resection"],
    "fatty liver disease": ["Lifestyle modification", "Vitamin E"],
    "kidney cyst": ["Monitoring", "Surgical removal if symptomatic"],
    "kidney tumor": ["Nephrectomy", "Sunitinib"],
    "myocardial infarction": ["Aspirin", "Clopidogrel", "Beta-blocker"],
    "cardiomyopathy": ["ACE inhibitors", "Beta-blockers"],
    "prostate cancer": ["Leuprolide", "Surgery"],
    "benign prostatic hyperplasia": ["Tamsulosin", "Finasteride"],
    "breast cancer": ["Tamoxifen", "Surgery"],
    "fibroadenoma": ["Monitoring", "Surgical removal if needed"],
    "ovarian cyst": ["Pain relievers", "Hormonal therapy"],
    "uterine fibroid": ["Tranexamic acid", "GnRH agonists"],
    "endometriosis": ["Hormonal therapy", "NSAIDs"],
  },
  drugInteractions: {
    "Amlodipine,Simvastatin": "May increase simvastatin concentration (demo warning).",
    "Metformin,Contrast Agent": "Possible risk with contrast agents (demo warning).",
    "Ciprofloxacin,Tizanidine": "Ciprofloxacin may interact with tizanidine (demo warning).",
    "Paracetamol,Alcohol": "Increased liver risk if combined with heavy alcohol (demo warning).",
    "Azithromycin,Amoxicillin": "Usually not recommended to combine antibiotics without reason (demo note)."
  },
  costFactors: {
    baseCosts: {
      "X-ray_Pneumonia": 15000,
      "MRI_Brain_Tumor": 75000,
      "General_Checkup": 5000
    },
    severityMultipliers: { "Low": 1.0, "Medium": 1.5, "High": 2.5 },
    complexityMultipliers: { "Basic": 1.0, "Intermediate": 1.3, "Complex": 2.0 },
    hospitalMultipliers: { "Public": 0.8, "Private": 1.2, "Specialty": 1.8 }
  },
  progressionData: [
    { patientId: 1, date: "2024-01-15", lesionSize: 12.5, stage: "Progressing" },
    { patientId: 1, date: "2024-02-15", lesionSize: 15.2, stage: "Progressing" },
    { patientId: 1, date: "2024-03-15", lesionSize: 18.1, stage: "Progressing" },
    { patientId: 2, date: "2024-01-10", lesionSize: 8.3, stage: "Stable" },
    { patientId: 2, date: "2024-02-10", lesionSize: 8.1, stage: "Stable" },
    { patientId: 2, date: "2024-03-10", lesionSize: 7.9, stage: "Improving" }
  ]
};

// Global variables
let selectedDrugs = [];
let currentProgressionChart = null;
let generatedReports = JSON.parse(localStorage.getItem('medicalReports') || '[]');

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize Application
function initializeApp() {
  setupNavigation();
  setupImageAnalysis();
  setupDiseaseTracking();
  setupDrugRecommendations();
  setupCostEstimation();
  setupReports();
  populatePatientSelect();
  displayReports();
}

// Navigation System
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const dashboardCards = document.querySelectorAll('.dashboard-card');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModule = link.dataset.module;
      switchModule(targetModule);
      
      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  dashboardCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetModule = card.dataset.module;
      switchModule(targetModule);
      
      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      const targetNav = document.querySelector(`[data-module="${targetModule}"]`);
      if (targetNav) targetNav.classList.add('active');
    });
  });
}

function switchModule(moduleId) {
  // Hide all modules
  document.querySelectorAll('.module').forEach(module => {
    module.classList.remove('active');
  });
  
  // Show target module
  const targetModule = document.getElementById(moduleId);
  if (targetModule) {
    targetModule.classList.add('active');
  }
}

// Image Analysis Module
function setupImageAnalysis() {
  const imageInput = document.getElementById('image-input');
  const uploadArea = document.getElementById('upload-area');
  
  imageInput.addEventListener('change', handleImageUpload);
  
  // Drag and drop functionality
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#6366f1';
    uploadArea.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
  });
  
  uploadArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '';
    uploadArea.style.backgroundColor = '';
  });
  
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageFile(files[0]);
    }
  });
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    handleImageFile(file);
  }
}

function handleImageFile(file) {
  if (!file.type.startsWith('image/')) {
    alert('Please select a valid image file.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    displayImagePreview(e.target.result, file.name);
    simulateImageAnalysis(file.name);
  };
  reader.readAsDataURL(file);
}

function displayImagePreview(imageSrc, fileName) {
  const uploadArea = document.getElementById('upload-area');
  const imagePreview = document.getElementById('image-preview');
  const previewImg = document.getElementById('preview-img');
  const imageName = document.getElementById('image-name');
  
  uploadArea.style.display = 'none';
  imagePreview.style.display = 'block';
  previewImg.src = imageSrc;
  imageName.textContent = fileName;
}

function removeImage() {
  const uploadArea = document.getElementById('upload-area');
  const imagePreview = document.getElementById('image-preview');
  const analysisResults = document.getElementById('analysis-results');
  
  uploadArea.style.display = 'block';
  imagePreview.style.display = 'none';
  analysisResults.style.display = 'none';
  
  document.getElementById('image-input').value = '';
}

function simulateImageAnalysis(fileName) {
  showLoading('Analyzing medical image...');
  
  setTimeout(() => {
    hideLoading();
    
    // Simulate AI analysis results
    const results = generateAnalysisResults(fileName);
    displayAnalysisResults(results);
    
  }, 3000);
}

function generateAnalysisResults(fileName) {
  const isXray = fileName.toLowerCase().includes('xray') || fileName.toLowerCase().includes('chest');
  const isMRI = fileName.toLowerCase().includes('mri') || fileName.toLowerCase().includes('brain');
  
  if (isXray) {
    return {
      type: 'Chest X-ray',
      diagnosis: 'Pneumonia Detected',
      description: 'Analysis indicates signs consistent with pneumonia in the lower right lung lobe.',
      confidence: Math.floor(Math.random() * 15) + 85, // 85-99%
      severity: 'Medium',
      findings: ['Consolidation in lower right lobe', 'Increased opacity', 'Air bronchograms present']
    };
  } else if (isMRI) {
    return {
      type: 'Brain MRI',
      diagnosis: 'Possible Lesion Detected',
      description: 'Small hyperintense lesion identified in the frontal cortex, further evaluation recommended.',
      confidence: Math.floor(Math.random() * 20) + 75, // 75-94%
      severity: 'Low',
      findings: ['Hyperintense signal on T2', 'Size: 8mm x 6mm', 'Location: Frontal cortex']
    };
  } else {
    return {
      type: 'Medical Image',
      diagnosis: 'Normal Findings',
      description: 'No significant abnormalities detected in the submitted image.',
      confidence: Math.floor(Math.random() * 10) + 88, // 88-97%
      severity: 'Normal',
      findings: ['No acute findings', 'Normal anatomical structures', 'No pathological changes']
    };
  }
}

function displayAnalysisResults(results) {
  const analysisResults = document.getElementById('analysis-results');
  const confidenceValue = document.getElementById('confidence-value');
  const diagnosisTitle = document.getElementById('diagnosis-title');
  const diagnosisDescription = document.getElementById('diagnosis-description');
  const severityStatus = document.getElementById('severity-status');
  
  analysisResults.style.display = 'block';
  confidenceValue.textContent = `${results.confidence}%`;
  diagnosisTitle.textContent = results.diagnosis;
  diagnosisDescription.textContent = results.description;
  severityStatus.textContent = results.severity;
  
  // Update severity status styling
  severityStatus.className = 'status';
  if (results.severity === 'High') {
    severityStatus.classList.add('status--error');
  } else if (results.severity === 'Medium') {
    severityStatus.classList.add('status--warning');
  } else if (results.severity === 'Normal') {
    severityStatus.classList.add('status--success');
  } else {
    severityStatus.classList.add('status--info');
  }
  
  // Store results for report generation
  window.currentAnalysisResults = results;
}

function analyzeAnother() {
  removeImage();
}

function generateReport() {
  const results = window.currentAnalysisResults;
  if (!results) return;
  
  const report = {
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    type: 'Medical Image Analysis',
    patient: 'Anonymous Patient',
    diagnosis: results.diagnosis,
    findings: results.findings,
    recommendations: generateRecommendations(results),
    confidence: results.confidence
  };
  
  generatedReports.push(report);
  localStorage.setItem('medicalReports', JSON.stringify(generatedReports));
  
  alert('Medical report generated successfully!');
  displayReports();
}

function generateRecommendations(results) {
  if (results.severity === 'High') {
    return [
      'Immediate medical consultation required',
      'Consider hospitalization',
      'Follow-up imaging in 24-48 hours'
    ];
  } else if (results.severity === 'Medium') {
    return [
      'Consultation with specialist recommended',
      'Follow-up imaging in 1-2 weeks',
      'Monitor symptoms closely'
    ];
  } else {
    return [
      'Routine follow-up recommended',
      'Maintain regular check-ups',
      'No immediate intervention required'
    ];
  }
}

// Disease Tracking Module
function setupDiseaseTracking() {
  populatePatientSelect();
}

function populatePatientSelect() {
  const patientSelect = document.getElementById('patient-select');
  if (!patientSelect) return;
  
  patientSelect.innerHTML = '<option value="">Choose a patient</option>';
  appData.samplePatients.forEach(patient => {
    const option = document.createElement('option');
    option.value = patient.id;
    option.textContent = `${patient.name} (${patient.age}, ${patient.gender})`;
    patientSelect.appendChild(option);
  });
}

function loadPatientData() {
  const patientSelect = document.getElementById('patient-select');
  const patientId = parseInt(patientSelect.value);
  
  if (!patientId) {
    alert('Please select a patient first.');
    return;
  }
  
  const patient = appData.samplePatients.find(p => p.id === patientId);
  const progressionData = appData.progressionData.filter(d => d.patientId === patientId);
  
  displayPatientInfo(patient);
  displayProgressionChart(progressionData);
  
  document.getElementById('tracking-content').style.display = 'block';
}

function displayPatientInfo(patient) {
  const patientInfo = document.getElementById('patient-info');
  patientInfo.innerHTML = `
    <h3>${patient.name}</h3>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px;">
      <div>
        <strong>Age:</strong> ${patient.age}
      </div>
      <div>
        <strong>Gender:</strong> ${patient.gender}
      </div>
      <div>
        <strong>Conditions:</strong> ${patient.conditions.join(', ')}
      </div>
    </div>
  `;
}

function displayProgressionChart(data) {
  const ctx = document.getElementById('progression-chart');
  
  // Destroy existing chart if it exists
  if (currentProgressionChart) {
    currentProgressionChart.destroy();
  }
  
  const dates = data.map(d => new Date(d.date).toLocaleDateString());
  const lesionSizes = data.map(d => d.lesionSize);
  
  currentProgressionChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Lesion Size (mm)',
        data: lesionSizes,
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Disease Progression Over Time',
          color: '#e5e7eb'
        },
        legend: {
          labels: {
            color: '#e5e7eb'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#9ca3af'
          },
          grid: {
            color: 'rgba(156, 163, 175, 0.2)'
          }
        },
        y: {
          ticks: {
            color: '#9ca3af'
          },
          grid: {
            color: 'rgba(156, 163, 175, 0.2)'
          }
        }
      }
    }
  });
}

function addDataPoint() {
  const patientSelect = document.getElementById('patient-select');
  const patientId = parseInt(patientSelect.value);
  
  if (!patientId) {
    alert('Please select a patient first.');
    return;
  }
  
  // Simulate adding a new data point
  const newSize = prompt('Enter new lesion size (mm):');
  if (newSize && !isNaN(newSize)) {
    const newDataPoint = {
      patientId: patientId,
      date: new Date().toISOString().split('T')[0],
      lesionSize: parseFloat(newSize),
      stage: parseFloat(newSize) > 15 ? 'Progressing' : 'Stable'
    };
    
    appData.progressionData.push(newDataPoint);
    loadPatientData(); // Refresh the chart
  }
}

function predictProgression() {
  const patientSelect = document.getElementById('patient-select');
  const patientId = parseInt(patientSelect.value);
  
  if (!patientId) {
    alert('Please select a patient first.');
    return;
  }
  
  showLoading('Predicting disease progression...');
  
  setTimeout(() => {
    hideLoading();
    
    const progressionData = appData.progressionData.filter(d => d.patientId === patientId);
    const prediction = generateProgressionPrediction(progressionData);
    
    document.getElementById('prediction-value').textContent = prediction;
    document.getElementById('prediction-results').style.display = 'block';
  }, 2000);
}

function generateProgressionPrediction(data) {
  if (data.length < 2) return 'Insufficient data for prediction';
  
  const sizes = data.map(d => d.lesionSize);
  const trend = sizes[sizes.length - 1] - sizes[0];
  
  if (trend > 5) {
    return 'Rapid progression expected - immediate intervention recommended';
  } else if (trend > 2) {
    return 'Moderate progression expected - close monitoring required';
  } else if (trend > -1) {
    return 'Stable progression expected - routine follow-up';
  } else {
    return 'Improvement expected - treatment showing positive results';
  }
}

// Drug Recommendations Module
function setupDrugRecommendations() {
  const diseaseInput = document.getElementById('disease-input');
  diseaseInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchDrugs();
    }
  });
}

function searchDrugs() {
  const diseaseInput = document.getElementById('disease-input');
  const query = diseaseInput.value.trim().toLowerCase();
  
  if (!query) {
    alert('Please enter a disease or condition.');
    return;
  }
  
  showLoading('Searching medication database...');
  
  setTimeout(() => {
    hideLoading();
    
    const matchedDisease = findBestMatch(query, Object.keys(appData.diseaseDatabase));
    if (matchedDisease) {
      const drugs = appData.diseaseDatabase[matchedDisease];
      displayDrugResults(matchedDisease, drugs);
    } else {
      alert('No medications found for the entered condition. Please try a different term.');
    }
  }, 1500);
}

function findBestMatch(query, diseases) {
  // Simple fuzzy matching
  for (let disease of diseases) {
    if (disease.includes(query) || query.includes(disease)) {
      return disease;
    }
  }
  
  // Check for partial matches
  for (let disease of diseases) {
    const words = query.split(' ');
    const diseaseWords = disease.split(' ');
    
    for (let word of words) {
      for (let dWord of diseaseWords) {
        if (word.length > 3 && dWord.includes(word)) {
          return disease;
        }
      }
    }
  }
  
  return null;
}

function displayDrugResults(disease, drugs) {
  const drugResults = document.getElementById('drug-results');
  const recommendedDrugs = document.getElementById('recommended-drugs');
  
  recommendedDrugs.innerHTML = '';
  
  drugs.forEach(drug => {
    const drugItem = document.createElement('div');
    drugItem.className = 'drug-item';
    drugItem.innerHTML = `
      <span>${drug}</span>
      <button class="btn btn--sm btn--secondary" onclick="selectDrug('${drug}')">
        Select
      </button>
    `;
    recommendedDrugs.appendChild(drugItem);
  });
  
  drugResults.style.display = 'block';
  updateSelectedDrugsDisplay();
}

function selectDrug(drugName) {
  if (!selectedDrugs.includes(drugName)) {
    selectedDrugs.push(drugName);
    updateSelectedDrugsDisplay();
  }
}

function updateSelectedDrugsDisplay() {
  const selectedDrugsDiv = document.getElementById('selected-drugs');
  
  if (selectedDrugs.length === 0) {
    selectedDrugsDiv.innerHTML = '<p>Select medications to check for interactions</p>';
  } else {
    selectedDrugsDiv.innerHTML = `
      <h4>Selected Medications:</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
        ${selectedDrugs.map(drug => `
          <span class="status status--info" style="cursor: pointer;" onclick="removeDrug('${drug}')">
            ${drug} ×
          </span>
        `).join('')}
      </div>
    `;
  }
}

function removeDrug(drugName) {
  selectedDrugs = selectedDrugs.filter(drug => drug !== drugName);
  updateSelectedDrugsDisplay();
}

function checkInteractions() {
  if (selectedDrugs.length < 2) {
    alert('Please select at least 2 medications to check for interactions.');
    return;
  }
  
  showLoading('Checking drug interactions...');
  
  setTimeout(() => {
    hideLoading();
    
    const interactions = findInteractions(selectedDrugs);
    displayInteractionResults(interactions);
  }, 1500);
}

function findInteractions(drugs) {
  const interactions = [];
  
  for (let i = 0; i < drugs.length; i++) {
    for (let j = i + 1; j < drugs.length; j++) {
      const pair1 = `${drugs[i]},${drugs[j]}`;
      const pair2 = `${drugs[j]},${drugs[i]}`;
      
      if (appData.drugInteractions[pair1]) {
        interactions.push({
          drugs: [drugs[i], drugs[j]],
          warning: appData.drugInteractions[pair1]
        });
      } else if (appData.drugInteractions[pair2]) {
        interactions.push({
          drugs: [drugs[j], drugs[i]],
          warning: appData.drugInteractions[pair2]
        });
      }
    }
  }
  
  return interactions;
}

function displayInteractionResults(interactions) {
  const interactionResults = document.getElementById('interaction-results');
  
  if (interactions.length === 0) {
    interactionResults.innerHTML = `
      <div class="status status--success">
        <i class="fas fa-check-circle"></i>
        No known interactions found between selected medications.
      </div>
    `;
  } else {
    interactionResults.innerHTML = `
      <h3>Drug Interaction Warnings</h3>
      ${interactions.map(interaction => `
        <div class="interaction-warning">
          <i class="fas fa-exclamation-triangle"></i>
          <strong>${interaction.drugs.join(' + ')}:</strong><br>
          ${interaction.warning}
        </div>
      `).join('')}
    `;
  }
  
  interactionResults.style.display = 'block';
}

// Cost Estimation Module
function setupCostEstimation() {
  // Add event listeners for real-time updates if needed
}

function calculateCost() {
  const age = parseInt(document.getElementById('patient-age').value);
  const gender = document.getElementById('patient-gender').value;
  const bmi = parseFloat(document.getElementById('patient-bmi').value);
  const children = parseInt(document.getElementById('patient-children').value) || 0;
  const smoking = document.getElementById('patient-smoking').value;
  const region = document.getElementById('patient-region').value;
  const procedureType = document.getElementById('procedure-type').value;
  const severity = document.getElementById('severity-level').value;
  const complexity = document.getElementById('complexity-level').value;
  const hospitalType = document.getElementById('hospital-type').value;
  
  // Validate required fields
  if (!age || !gender || !procedureType || !severity || !complexity || !hospitalType) {
    alert('Please fill in all required fields.');
    return;
  }
  
  showLoading('Calculating healthcare costs...');
  
  setTimeout(() => {
    hideLoading();
    
    const costBreakdown = performCostCalculation({
      age, gender, bmi, children, smoking, region,
      procedureType, severity, complexity, hospitalType
    });
    
    displayCostResults(costBreakdown);
  }, 2000);
}

function performCostCalculation(data) {
  const baseCost = appData.costFactors.baseCosts[data.procedureType];
  const severityMultiplier = appData.costFactors.severityMultipliers[data.severity];
  const complexityMultiplier = appData.costFactors.complexityMultipliers[data.complexity];
  const hospitalMultiplier = appData.costFactors.hospitalMultipliers[data.hospitalType];
  
  // Additional factors based on patient demographics
  let demographicMultiplier = 1.0;
  if (data.age > 60) demographicMultiplier += 0.2;
  if (data.smoking === 'yes') demographicMultiplier += 0.1;
  if (data.bmi > 30) demographicMultiplier += 0.15;
  
  const severityCost = baseCost * (severityMultiplier - 1);
  const complexityCost = baseCost * (complexityMultiplier - 1);
  const hospitalCost = baseCost * (hospitalMultiplier - 1);
  const demographicCost = baseCost * (demographicMultiplier - 1);
  
  const totalCost = baseCost * severityMultiplier * complexityMultiplier * hospitalMultiplier * demographicMultiplier;
  
  return {
    baseCost,
    severityCost,
    complexityCost,
    hospitalCost,
    demographicCost,
    totalCost: Math.round(totalCost),
    insuranceCoverage: Math.round(totalCost * 0.7),
    outOfPocket: Math.round(totalCost * 0.3)
  };
}

function displayCostResults(breakdown) {
  document.getElementById('total-cost').textContent = `₹${breakdown.totalCost.toLocaleString('en-IN')}`;
  document.getElementById('base-cost').textContent = `₹${breakdown.baseCost.toLocaleString('en-IN')}`;
  document.getElementById('severity-cost').textContent = `₹${Math.round(breakdown.severityCost).toLocaleString('en-IN')}`;
  document.getElementById('complexity-cost').textContent = `₹${Math.round(breakdown.complexityCost).toLocaleString('en-IN')}`;
  document.getElementById('hospital-cost').textContent = `₹${Math.round(breakdown.hospitalCost).toLocaleString('en-IN')}`;
  document.getElementById('insurance-coverage').textContent = `₹${breakdown.insuranceCoverage.toLocaleString('en-IN')}`;
  document.getElementById('out-of-pocket').textContent = `₹${breakdown.outOfPocket.toLocaleString('en-IN')}`;
  
  document.getElementById('cost-results').style.display = 'block';
}

function clearCostForm() {
  document.getElementById('patient-age').value = '';
  document.getElementById('patient-gender').value = '';
  document.getElementById('patient-bmi').value = '';
  document.getElementById('patient-children').value = '';
  document.getElementById('patient-smoking').value = '';
  document.getElementById('patient-region').value = '';
  document.getElementById('procedure-type').value = '';
  document.getElementById('severity-level').value = '';
  document.getElementById('complexity-level').value = '';
  document.getElementById('hospital-type').value = '';
  
  document.getElementById('cost-results').style.display = 'none';
}

// Reports Module
function setupReports() {
  displayReports();
}

function displayReports() {
  const reportsList = document.getElementById('reports-list');
  
  if (generatedReports.length === 0) {
    reportsList.innerHTML = `
      <div class="no-reports">
        <i class="fas fa-file-medical-alt"></i>
        <h3>No Reports Available</h3>
        <p>Generate reports from the Image Analysis module to view them here.</p>
      </div>
    `;
  } else {
    reportsList.innerHTML = generatedReports.map(report => `
      <div class="report-item" onclick="viewReport(${report.id})">
        <div class="report-header">
          <div class="report-title">${report.type} - ${report.diagnosis}</div>
          <div class="report-date">${report.date}</div>
        </div>
        <div class="report-summary">
          Patient: ${report.patient} | Confidence: ${report.confidence}%
        </div>
      </div>
    `).join('');
  }
}

function viewReport(reportId) {
  const report = generatedReports.find(r => r.id === reportId);
  if (!report) return;
  
  const reportContent = document.getElementById('report-content');
  reportContent.innerHTML = generateReportHTML(report);
  
  document.getElementById('report-modal').classList.remove('hidden');
}

function generateReportHTML(report) {
  return `
    <div class="report-content">
      <h1>Medical Analysis Report</h1>
      
      <div class="report-section">
        <h3>Patient Information</h3>
        <p><strong>Patient:</strong> ${report.patient}</p>
        <p><strong>Date:</strong> ${report.date}</p>
        <p><strong>Report Type:</strong> ${report.type}</p>
      </div>
      
      <div class="report-section">
        <h3>Diagnosis</h3>
        <p><strong>Primary Finding:</strong> ${report.diagnosis}</p>
        <p><strong>Confidence Level:</strong> ${report.confidence}%</p>
      </div>
      
      <div class="report-section">
        <h3>Detailed Findings</h3>
        <ul>
          ${report.findings.map(finding => `<li>${finding}</li>`).join('')}
        </ul>
      </div>
      
      <div class="report-section">
        <h3>Recommendations</h3>
        <ul>
          ${report.recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
      </div>
      
      <div class="report-section">
        <h3>Important Notes</h3>
        <p>This report is generated by AI-assisted analysis and should be reviewed by a qualified medical professional. It is not a substitute for professional medical advice, diagnosis, or treatment.</p>
      </div>
    </div>
  `;
}

function closeModal() {
  document.getElementById('report-modal').classList.add('hidden');
}

function printReport() {
  window.print();
}

// Utility Functions
function showLoading(message) {
  document.getElementById('loading-text').textContent = message;
  document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('loading-overlay').style.display = 'none';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('report-modal');
  if (e.target === modal) {
    closeModal();
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});