import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Starter Fit",
      price: 29,
      duration: "monthly",
      features: [
        "Unlimited gym floor access",
        "Locker room access",
        "Free fitness assessment (once)",
        "Access during non-peak hours",
      ],
    },
    {
      id: 2,
      name: "Active Plus",
      price: 49,
      duration: "monthly",
      features: [
        "24/7 gym access",
        "Locker + shower facilities",
        "Access to all group classes",
        "1 free personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Pro Athlete",
      price: 69,
      duration: "monthly",
      features: [
        "All Standard features",
        "Swimming pool access",
        "Sauna & steam room",
        "Unlimited group classes",
      ],
    },
    {
      id: 4,
      name: "Elite Transformation",
      price: 99,
      duration: "monthly",
      features: [
        "24/7 full-access membership",
        "Weekly personal training sessions",
        "Nutrition & diet consultation",
        "Advanced body progress tracking",
        "VIP locker & private shower area",
      ],
    },
  ];

  return (
    <div className="mr-12">
      <h1 className="text-5xl">Best Price Options In The Town !!</h1>
      <div className="grid md:grid-cols-3 gap-5">
        {priceOptions.map((option, index) => (
          <PriceOption key={index} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
