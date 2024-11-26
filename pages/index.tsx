import Footer from "@/components/footer";
import Header from "@/components/header";
import axios from "axios";
import { useSession } from "next-auth/react";

interface HomeProps {
  country: {
    name: string;
    flag: string;
  };
}

export default function Home({ country }: HomeProps) {
  const { data: session } = useSession();
  return (
    <>
      <div>
        <Header country={country} />
        {session ? "Welcome back" : "Please sign in"}
        <Footer country={country} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // let data = await axios
  //   .get(`https://api.ipregistry.co/?key=${process.env.IP_REGISTRY_KEY}`)
  //   .then((res) => {
  //     console.log(res.data.location.country);
  //     return res.data.location.country;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // return {
  //   props: {
  //     country: { name: data.name, flag: data.flag.emojitwo },
  //   },
  // };
  return {
    props: {
      country: { name: "India", flag: "/images/india.png" },
    },
  };
}
