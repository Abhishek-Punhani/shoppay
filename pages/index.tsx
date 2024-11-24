import Footer from "@/components/footer";
import Header from "@/components/header";
import axios from "axios";

interface HomeProps {
  country: {
    name: string;
    flag: string;
  };
}

export default function Home({ country }: HomeProps) {
  return (
    <>
      <div>
        <Header country={country} />
        <Footer country={country} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get(`https://api.ipregistry.co/?key=${process.env.IP_REGISTRY_KEY}`)
    .then((res) => {
      console.log(res.data.location.country);
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
    },
  };
}
