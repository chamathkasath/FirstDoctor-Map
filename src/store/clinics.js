import { create } from 'zustand'
import logo from '../assets/logo.svg' // one logo for all markers & popup images

export const useClinicStore = create((set, get) => ({
  // Map state
  center: { lat: 6.894155275018665, lng: 79.86140552496181  },
  zoom: 14,
  darkMode: false,
  mapType: 'roadmap', // 'roadmap' | 'satellite' | 'terrain' | 'hybrid'
  setMapType: (mt) => set({ mapType: mt }),

  // Selection
  selectedId: null,
  setSelected: (id) => set({ selectedId: id }),

  // Search/filter
  search: '',
  setSearch: (q) => set({ search: q }),

  // Data
  clinics: [
    { id:'hq', name:'First Docter (Pvt) Ltd.', doctorName:'-', phone:'0112595939', lat:6.894155275018665, lng:79.86140552496181,
      description:'Headquarters and primary service center.', imageUrl:logo, logoUrl:logo, isMainCompany:true },
    { id:'c1', name:'Medical Centre Bokundara - Teledoc Srilanka', doctorName:'Dr. Leel Gamarathne', phone:'0766120039', lat:6.819822955465856, lng:79.91685547746698, //6.819822955465856, 79.91685547746698
      description:'Family health & pediatrics.', imageUrl:logo, logoUrl:logo, isMainCompany:false },
    { id:'c2', name:'Mount Lavinia Clinic', doctorName:'Dr. Perera', phone:'071-2223344', lat:6.84, lng:79.8647,
      description:'General practice & lab services.', imageUrl:logo, logoUrl:logo, isMainCompany:false },
    { id:'c3', name:'Nugegoda Clinic', doctorName:'Dr. Fernando', phone:'072-9876543', lat:6.8698, lng:79.8997,
      description:'Dermatology & diagnostics.', imageUrl:logo, logoUrl:logo, isMainCompany:false },
    { id:'c4', name:'Wellawatte Clinic', doctorName:'Dr. Jayasuriya', phone:'075-4455667', lat:6.874, lng:79.8607,
      description:'Physician & pharmacy.', imageUrl:logo, logoUrl:logo, isMainCompany:false },
    {id:'c5', name:'Family Health Clinic, No 356 Aluthmawatha Road, Colombo 15, Sri Lanka', doctorName:'Dr. Sumithra Samarakoon', phone:'0777357652', lat:6.958462955776197, lng:79.8633344390563, 
      description:'General practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c6', name:'Kaduwela Medical Centre', doctorName:'Dr. Lakshanthe Peiris', phone:'0777960049', lat:6.918772689450752, lng:79.96625531481709, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c7',  doctorName:'Dr. Bhanu Wijetilake', phone:'0715327545', lat:7.0931677940036915, lng:80.00042028496269, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c8',  doctorName:'Dr. Gayan Jinadasa', phone:'0778868680', lat:6.847289096364928, lng:79.97024228131053, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c9',  doctorName:'Dr. Lakshitha Ranasinghe', phone:'0774099908', lat:6.831165035918114, lng:79.8687981966551, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c10', doctorName:'Dr. Mhadawa Perera', phone:'0710554224', lat:6.8829006056803514, lng:79.93904423513693, description:'Wound Consultation.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c11', name:'Suwadhana Medical Center', doctorName:'Dr. Indika Halpage', phone:'0714435803', lat:6.956118740198818, lng:80.20391673898317, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c12', doctorName:'Dr. Kithsiri Perera,Dr.Hemanthi Manohari', phone:'Dr.Kithsiri perera-0773066795 ,Dr.Hemanthi Manohari-0772071129', lat:6.84982039506248, lng:79.91760533898287, description:'Dr.Kithsiri Perera-Sports Medicine Specialist. Dr.Hemanthi Manohari-General Practitioner, Aesthetic Physician', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c13', name:'Dolahena medical center', doctorName:'Dr. Niroj Rashan Algewatta', phone:'0714445145', lat:6.82445959113767, lng:80.02032179665508, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c14', name:'Roseth Hospital (Pvt) Ltd', doctorName:'Dr. Arulanantham Kenneth', phone:'0773721416', lat:6.239370134161352, lng:80.05426625247294, description:'Consultant Physician.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c15', doctorName:'Dr. Muditha Palliyaguruge', phone:'0777281989', lat:6.242553459045323, lng:80.06032746781753, description:'General Physician.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c16', doctorName:'Dr. Punyajith Naresh Bandara Walgampaya,Dr. (Mrs) Eranthee Mudalige Walgampaya', phone:'0768568667', lat:6.873286776023635, lng:79.8632722254914, description:'Family Physician.', imageUrl:logo, logoUrl:logo, isMainCompany:false},


    {id:'c18', doctorName:'Dr. (Mrs) Eranthee Mudalige Walgampaya', phone:'0777218917', lat:6.873286776023635, lng:79.8632722254914, description:'Family Physician, Lifestyle Physician.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c19', doctorName:'Dr. Asanalebbe Mubarak', phone:'0718207161', lat:6.914567958354147, lng:79.85257426781918, description:'Pulmonologist.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c20', name:'Isuru Family Medical Care', doctorName:'Dr. Nihal Peeris', phone:'0777356314', lat:6.929255952993601, lng:79.9827576678192, description:'Family Physician, General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c21', name:'Ivory Medical and Dental Surgery', doctorName:'Dr. (Mrs) Kanchana Rajakaruna', phone:'077495747', lat:7.286400224283308, lng:80.60465933342513, description:'Dental Surgeon.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c23', doctorName:'Dr. Ahamed Mohideen Siddeek Ali', phone:'0754656817', lat:6.914589259958661, lng:79.85257426781918, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c24', doctorName:'Dr. Pravin Goonewardene', phone:'0722625777', lat:6.875969868181274, lng:79.92462679665523, description:'Family Physician, General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c25', doctorName:'Dr. Ishan Kapugedara', phone:'0773705787', lat:7.286400224283308, lng:80.60465933342513, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c26', name:'Ryda Medic', doctorName:'Dr. Jagath Pelandagama', phone:'0759214841', lat:6.9167185081894615, lng:79.923565338983, description:'General Practitioner', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c27', doctorName:'Dr. Kanagasuntheram Manivannen', phone:'0770563891', lat:9.735470620017209, lng:79.87976771075024, description:'General Practitioner', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c28', doctorName:'Dr. Aruna Pradeep Ruwanpathirana', phone:'0777856736', lat:6.84370069341618, lng:79.91406909665511, description:'General Practitioner, Obstetrician and Gynecologist', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c29', name:'Panamas Healthcare', doctorName:'Dr. Karven Janaka Cooray', phone:'0717746208', lat:6.8773967775551785, lng:79.93886263898297, description:'General Practitioner', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c30', name:'Medical center', doctorName:'Dr. Janapriya Peiris', phone:'0776543693', lat:7.2656853892050535, lng:80.55649229665643, description:'General Practitioner (Reg. No: 45230).', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c31', name:'Dr. Rukshana Upendra De Silva Clinic', doctorName:'Dr. Rukshana Upendra De Silva', phone:'0778392732', lat:6.732154244719544, lng:79.90472476103972, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c32', name:'Health and wellness  Clinic', doctorName:'Dr. Abdul Salam Ahamed', phone:'0762567642', lat:6.940869079350948, lng:79.86239297746694, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c33', name:'Josef Fraser Ninewells ', doctorName:'Dr. Subash Mendis', phone:'0772928108', lat:6.8956063226559445, lng:79.86530269665526, description:'General Practitioner, Nutrition Specialist.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c34', name:'Lunawa Medical Center', doctorName:'Dr. Anthony Mendis', phone:'0773419354', lat:6.795483076386057, lng:79.87970653898273, description:'Intensivist (Reg. No: 17361).', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c35', name:'Medical clinic', doctorName:'Dr (Mrs) Gawrie De Silva', phone:'0777687380', lat:7.26574357455885, lng:80.55653166782022, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c36', doctorName:'Dr. Ruwan Rajapaksha', phone:'0777424572', lat:6.892013548780066, lng:79.99282079945519, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    {id:'c38', name:'Dr. Sudheer Siriwardena', doctorName:'Dr. Sudheer Siriwardena', phone:'0714465664', lat:6.939955389277554, lng:80.00439131486065, description:'General Practitioner.', imageUrl:logo, logoUrl:logo, isMainCompany:false},
    
    

















    
















  

  ],

  // Derived helpers
  filteredClinics: () => {
    const q = (get().search || '').trim().toLowerCase()
    const list = get().clinics
    if (!q) return list
    return list.filter(c =>
      c.name.toLowerCase().includes(q) ||
      (c.doctorName || '').toLowerCase().includes(q)
    )
  },

  // View helpers
  setCenter: (latLng) => set({ center: latLng }),
  setZoom: (z) => set({ zoom: z }),
  toggleDark: () => set({ darkMode: !get().darkMode }),
}))
