import React from 'react';
import Card from './components/card';
// import { User } from 'lucide-react';


const App = () => {
  const jobopening=[
  {
    "brandLogo": "https://logo.clearbit.com/meta.com",
    "companyName": "Meta",
    "datePosted": "5 days ago",
    "post": "Software Engineer - Realtime Platform",
    "tag1": "Full time",
    "tag2": "Senior",
    "pay": "$95/hr",
    "location": "SKP, Pakistan"
  },
  {
    "brandLogo": "https://logo.clearbit.com/apple.com",
    "companyName": "Apple",
    "datePosted": "2 weeks ago",
    "post": "iOS Engineer - Core SDKs",
    "tag1": "Full time",
    "tag2": "Mid-level",
    "pay": "$70/hr",
    "location": "LHR, Pakistan"
  },
  {
    // "brandLogo": "https://logo.clearbit.com/amazon.com",
    "brandLogo":"https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    "companyName": "Amazon",
    "datePosted": "3 days ago",
    "post": "Site Reliability Engineer",
    "tag1": "Full time",
    "tag2": "Senior",
    "pay": "$85/hr",
    "location": "Faisalabad,Pakistan"
  },
  {
    "brandLogo": "https://logo.clearbit.com/netflix.com",
    "companyName": "Netflix",
    "datePosted": "10 weeks ago",
    "post": "Backend Engineer - Streaming",
    "tag1": "Contract",
    "tag2": "Mid-level",
    "pay": "$110/hr",
    "location": "Islamabad,Pakistan"
  },
  {
    "brandLogo": "https://logo.clearbit.com/google.com",
    "companyName": "Google",
    "datePosted": "1 week ago",
    "post": "Machine Learning Engineer - Ads",
    "tag1": "Full time",
    "tag2": "Senior",
    "pay": "$120/hr",
    "location": "Karachi, Pakistan"
  },
  {
    "brandLogo": "https://logo.clearbit.com/microsoft.com",
    "companyName": "Microsoft",
    "datePosted": "4 days ago",
    "post": "Cloud Software Engineer - Azure",
    "tag1": "Full time",
    "tag2": "Junior",
    "pay": "$45/hr",
    "location": "Multan, pakistan"
  },
  {
    "brandLogo": "https://logo.clearbit.com/nvidia.com",
    "companyName": "NVIDIA",
    "datePosted": "6 days ago",
    "post": "Research Engineer - Deep Learning",
    "tag1": "Full time",
    "tag2": "Senior",
    "pay": "$140/hr",
    "location": "DG.KHAN,Pakistan"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXVPOzXHe-g18Qcim6x2ebSHdkwG9GZe-_Q&s",
    "companyName": "Adobe",
    "datePosted": "8 weeks ago",
    "post": "Frontend Engineer - Creative Cloud",
    "tag1": "Part time",
    "tag2": "Junior",
    "pay": "$30/hr",
    "location": "Sialkot, Pakistan"
  },
  {
    "brandLogo": "https://logo.clearbit.com/salesforce.com",
    "companyName": "Salesforce",
    "datePosted": "3 weeks ago",
    "post": "Product Manager - Analytics",
    "tag1": "Full time",
    "tag2": "Mid-level",
    "pay": "$65/hr",
    "location": "Mianwali,Pakistan"
  },
  {
    "brandLogo": "https://logo.clearbit.com/tesla.com",
    "companyName": "Tesla",
    "datePosted": "2 days ago",
    "post": "Embedded Software Engineer - Autopilot",
    "tag1": "Full time",
    "tag2": "Senior",
    "pay": "$110/hr",
    "location": "Hydrabad,Pakistan"
  }
];
// console.log(jobopening);
  return (
<div className='parent' >
  {jobopening.map(function (elems,idx) {
    // hr aik element ko react uniquely identify kr pay is liye key pass krni hoti hai 
    return<div key={idx}>
      <Card company={elems.companyName}
     pay={elems.pay} 
     brandlogo={elems.brandLogo}
      datePosted={elems.datePosted}
      post={elems.post}
      tag1={elems.tag1}
      tag2={elems.tag2}
      location={elems.location}
    />
    </div> 
     
  })}




</div>
  );
}

export default App;
