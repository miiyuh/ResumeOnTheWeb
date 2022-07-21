import Ingredients from "components/Header/Ingredients";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import NoSSR from "components/NoSSR";
import Profiles from "components/Header/Profiles";
import PhotoWall from "components/Header/PhotoWall";
import Image from "next/image";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="h-screen grid place-items-center place-content-center gap-4">
      {/* Photo Wall */}
      <NoSSR>
        <PhotoWall size={width > Breakpoints.sm ? 384 : 256} />
      </NoSSR>

      {/* Logo */}
      <Image src="/images/logo.png" width={485} height={128} alt="Amruth Pillai" priority />

      {/* Text Version */}
      <h1 className="sr-only">
        Amruth Pillai - Resume on the Web
        <br />
        Designer, Developer, Photographer, Writer
        <br />
        Berlin, Germany &amp; Bengaluru, India
      </h1>

      {/* Ingredients */}
      <Ingredients />

      {/* Social Profiles */}
      <Profiles />
    </div>
  );
};

export default Header;
