import Header from "../molecule/Header";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center">{children}</main>
      <footer />
    </div>
  );
};

export default DefaultLayout;
