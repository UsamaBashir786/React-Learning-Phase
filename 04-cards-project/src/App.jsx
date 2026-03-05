// import React from 'react'

import { User as UserIcons } from "lucide-react";
import Card from "./components/Card";
import User from "./components/User";

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    datePosted: "5 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    pay: 65,
    location: "USA, Mountain View"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    tag1: "Part-time",
    tag2: "Junior",
    pay: 40,
    location: "USA, Menlo Park"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    datePosted: "10 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    pay: 70,
    location: "USA, Cupertino"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    datePosted: "1 month ago",
    tag1: "Full-time",
    tag2: "Junior",
    pay: 45,
    location: "USA, Seattle"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    tag1: "Part-time",
    tag2: "Junior",
    pay: 50,
    location: "USA, Los Gatos"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    pay: 60,
    location: "USA, Redmond"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta (Facebook)",
    datePosted: "8 days ago",
    tag1: "Full-time",
    tag2: "Junior",
    pay: 55,
    location: "USA, Menlo Park"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    companyName: "IBM",
    datePosted: "4 weeks ago",
    tag1: "Part-time",
    tag2: "Senior",
    pay: 50,
    location: "USA, Armonk"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=intel.com&sz=128",
    companyName: "Intel",
    datePosted: "10 weeks ago",
    tag1: "Full-time",
    tag2: "Junior",
    pay: 48,
    location: "USA, Santa Clara"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    companyName: "Oracle",
    datePosted: "1 week ago",
    tag1: "Full-time",
    tag2: "Senior",
    pay: 62,
    location: "USA, Redwood City"
  }
];
  return (
    <div className="parent">
      {jobOpenings.map(function(e){
        return <Card logo = {e.brandLogo} company = {e.companyName} date = {e.datePosted} location = {e.location} amount = {e.pay} tagOne = {e.tag1} tagTwo = {e.tag2} />
      })}
    </div>
  );
};

export default App;