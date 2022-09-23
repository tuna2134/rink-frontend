// localink frontend - index

import type { NextPage } from 'next';

import Button from '@mui/material/Button';

import { useLocale } from "./_app";
import Nav from "../components/header";

const Home: NextPage = () => {
  const t = useLocale()
  return (
    <div>
      <Nav />
      <h1 className="text-3xl font-bold underline">Hello Next.js</h1>
      <Button variant="contained">Hello World</Button>
    </div>
  );
};
export default Home;