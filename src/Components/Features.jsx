import React from "react";
import userIcon from "../Assets/Images/Features/Interface.png";
import shareIcon from "../Assets/Images/Features/share.png";
import lightbulbIcon from "../Assets/Images/Features/collaborations-idea.png";
import checklistIcon from "../Assets/Images/Features/Seamless.png";

const features = [
  {
    id: "01",
    title: "User-Friendly Interface",
    description:
      "Our platform offers seamless task management to boost your efficiency.",
    icon: userIcon,
  },
  {
    id: "02",
    title: "Collaborate & Share Effortlessly",
    description:
      "Invite team members to work together and achieve your goals faster.",
    icon: shareIcon,
  },
  {
    id: "03",
    title: "Effortless Collaboration",
    description:
      "Invite team members to work together and achieve your goals faster.",
    icon: lightbulbIcon,
  },
  {
    id: "04",
    title: "Seamless Access",
    description:
      "Stay connected and manage your tasks on the go with ease.",
    icon: checklistIcon,
  },
];

const FeatureCard = ({ feature }) => (
  <div className="bg-[#f0f0f7] rounded-lg p-6 shadow-md flex flex-col justify-between text-left relative h-full pl-14 pr-14 mt-2">
    <div className="absolute top-4 right-4 text-2xl text-[#D7DCE5] font-bold">
      {feature.id}
    </div>
    <div className="bg-white p-4 rounded-md w-fit mb-4">
      <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
    </div>
    <h3 className="text-base font-bold text-[#0A1B39] mb-1">{feature.title}</h3>
    <div className="flex gap-2 mb-4">
      <div className="h-1 w-8 bg-[#ED1C24] rounded-sm"></div>
      <div className="h-1 w-4 bg-[#ED1C24] rounded-sm"></div>
    </div>
    <p className="text-sm text-[#3E3E3E] leading-relaxed">{feature.description}</p>
  </div>
);

const ToDoFeatures = () => {
  return (
    <div className="bg-white py-20 px-4 md:px-14 mt-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0A1B39]">
          Transform Your Productivity with Our <br /> Innovative To-Do List Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-2 sm:px-6 lg:px-0 font-semibold">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoFeatures;
