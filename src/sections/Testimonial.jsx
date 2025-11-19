import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";

// Nieuwe Nederlandse reviews
const reviews = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Jan de Vries",
    username: "@jandevries",
    body: "Alex heeft onze website volledig vernieuwd. Het resultaat is snel, modern en gebruiksvriendelijk!"
  },
  {
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Sanne Bakker",
    username: "@sannebakker",
    body: "Geweldige samenwerking! Alex begrijpt echt wat wij nodig hebben en levert altijd kwaliteit."
  },
  {
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Mark Jansen",
    username: "@markjansen",
    body: "Onze webapplicatie was complex, maar Alex heeft het perfect gebouwd en alles werkend gekregen."
  },
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Lotte van Dijk",
    username: "@lottevandijk",
    body: "Altijd snel en professioneel! Alex weet precies hoe hij design en functionaliteit moet combineren."
  },
  {
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Koen Visser",
    username: "@koenvisser",
    body: "Ik ben onder de indruk van de kwaliteit en snelheid waarmee Alex onze webapplicatie heeft geleverd."
  },
  {
    img: "https://randomuser.me/api/portraits/women/34.jpg",
    name: "Eva de Groot",
    username: "@evadegroot",
    body: "Een echte professional! Alex luistert naar je wensen en zet ze om in een perfect functionerende website."
  }
];

// Splits reviews in twee rijen voor de marquee
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// Component voor één review kaart
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r from-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// Hoofd component
export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Wat Mijn Klanten Zeggen</h2>

      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        {/* Eerste marquee */}
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Tweede marquee, reverse */}
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
