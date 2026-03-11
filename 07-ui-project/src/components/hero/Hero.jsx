import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = ({data}) => {
  return (
    <div className="grid grid-cols-2 gap-10 px-20 py-24 items-center">
    <HeroLeft 
        badge={data.badge}
        heading={data.heading}
        subText={data.subText}
        btnLabel={data.btnLabel}
    />
      <HeroRight image={data.image} />
    </div>
  );
};

export default Hero;
