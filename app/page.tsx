
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="wrap py-6">
        <div className="grid md:grid-cols-[1.2fr_.8fr] gap-6 items-stretch">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Horror that actually feels real.</h1>
            <p className="lead mt-3">Rare merch drops. Watch-party kits. No fluff, no faux-deep metaphors—just the good stuff.</p>
            <div id="newsletter" className="card p-4 mt-4">
              <form name="friday-night-frights" method="POST" action="https://formspree.io/f/mgegbwkd" className="grid sm:grid-cols-[1fr_1fr_auto] gap-2">
                <input name="firstName" placeholder="First name" className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2" />
                <input name="email" type="email" required placeholder="you@domain.com" className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2" />
                <button className="btn">Join the Club</button>
                <p className="lead sm:col-span-3">No spam. One killer email, Fridays.</p>
              </form>
            </div>
          </div>
          <div className="card overflow-hidden">
            <div className="h-48 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(225,29,72,.25),transparent_60%),linear-gradient(180deg,#1a1a1a,#0d0d0d)]" />
            <div className="p-5">
              <h2 className="text-xl font-semibold">Next Drop: “Analog Screams”</h2>
              <p className="lead">Limited run tees + a VHS-style enamel pin. Subscribers get the link first.</p>
              <Link className="btn btn-ghost mt-3" href="/shop">Preview drops</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="drops" className="wrap py-6">
        <h2 className="text-2xl font-bold">Not everything hits the shelves.</h2>
        <p className="lead -mt-1 mb-3">Here’s a taste. Full details go to the list first.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <article className="tile">
            <div className="tile-img" />
            <div className="p-4"><h3 className="font-semibold">Bleeder Tee</h3><p className="lead">Ultra-soft black, subtle print.</p></div>
          </article>
          <article className="tile">
            <div className="tile-img" />
            <div className="p-4"><h3 className="font-semibold">Watch-Party Kit #001</h3><p className="lead">Everything for a gore-geous night in.</p></div>
          </article>
          <article className="tile">
            <div className="tile-img" />
            <div className="p-4"><h3 className="font-semibold">Analog Screams Pin</h3><p className="lead">VHS-core enamel with a gritty finish.</p></div>
          </article>
        </div>
      </section>
    </>
  );
}
