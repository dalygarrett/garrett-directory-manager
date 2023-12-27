// import { GoogleMaps } from "@yext/components-tsx-maps";
// import { LocationMap } from "@yext/sites-react-components";
import GridContainer from "../components/GridContainer";
import MapDescription from "../components/MapDescription";
import StaticMap from "../components/StaticMap";
import Title from "../components/Title";
import Hours from "../components/Hours";


export interface Coordinates {
  latitude?: number;
  longitude?: number;
}
export interface LetsTalkProps {
  description: string;
  emails: string;
  formattedPhone: string;
  geocodedCoordinate: Coordinates;
  hours: Week;
}

const LetsTalk = ({
  description,
  emails,
  formattedPhone,
  hours,
  geocodedCoordinate,
}: LetsTalkProps) => {
  return (
    <div className="flex items-center justify-center px-14 py-14" id="hours">
        <div className="max-w-7xl flex flex-col justify-center text-gray-900 ">
        <h2 className="text-4xl mb-6 font-bold tracking-tight text-gray-900">Information</h2>
        <span className="hidden md:block">
            <GridContainer>
            <MapDescription
                description={description}
                email={emails}
                phone={formattedPhone}
                textColor="#333333"
            />

            {hours && <Hours title={"Hours"} hours={hours} />}

            </GridContainer>
        </span>
        <span className="block md:hidden">
            <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
                {/* <StaticMap
                latitude={geocodedCoordinate.latitude}
                longitude={geocodedCoordinate.longitude}
                ></StaticMap> */}
            </div>
            <MapDescription
                description={description}
                email={emails}
                phone={formattedPhone}
                textColor="#333333"
            />
            </div>
        </span>
        </div>
    </div>
  );
};

export default LetsTalk;