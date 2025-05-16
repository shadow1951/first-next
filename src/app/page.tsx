import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <Image
        src="/eldenring.png"
        alt="Elden Ring"
        width={120}
        height={120}
        style={{
          borderRadius: "16px",
          marginBottom: 24,
          boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
        }}
      />
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 16 }}>
        Welcome to the Soulsborne Universe!
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          marginBottom: 32,
          maxWidth: 480,
          textAlign: "center",
        }}
      >
        Discover the legendary worlds of <b>Dark Souls Remastered</b>,{" "}
        <b>Bloodborne</b>, and <b>Elden Ring</b>. Prepare to die, explore
        haunting landscapes, and conquer epic bosses in these iconic action
        RPGs.
      </p>
      <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
        <Image
          src="/darksouls.png"
          alt="Dark Souls"
          width={100}
          height={100}
          style={{
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
            background: "#222",
          }}
        />
        <Image
          src="/bloodborne.png"
          alt="Bloodborne"
          width={100}
          height={100}
          style={{
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
            background: "#222",
          }}
        />
        <Image
          src="/eldenring.png"
          alt="Elden Ring"
          width={100}
          height={100}
          style={{
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
            background: "#222",
          }}
        />
      </div>
      <a
        href="https://en.bandainamcoent.eu/elden-ring/elden-ring"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: 20,
          padding: "12px 32px",
          background: "#fff",
          color: "#232526",
          borderRadius: 8,
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          transition: "background 0.2s, color 0.2s",
        }}
        onMouseOver={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#232526";
          (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
          (e.currentTarget as HTMLAnchorElement).style.color = "#232526";
        }}
      >
        Learn More
      </a>
    </main>
  );
}
