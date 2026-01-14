import logo from "../assets/logo.svg";

type RootProps = {
  name?: string;
};

export default function Root({ name }: RootProps) {
  return (
    <section>
      <header>
        <h1>Module 1: Hero</h1>
        <p>
          <small>January 9, 2026</small>
        </p>
      </header>

      <div className="hero">
        <img
          src={logo}
          alt="Module 1 Logo"
          width={120}
          height={120}
          className="logo"
        />
        <div className="container">
          <div>
            <h2 className="header">Welcome to Module 1</h2>
            <p className="subtext">
              This microfrontend demonstrates image assets and mounting in the
              single-spa shell.
            </p>
          </div>
        </div>
      </div>

      <p className="mounted">
        <em>{name} is mounted!</em>
      </p>
    </section>
  );
}
