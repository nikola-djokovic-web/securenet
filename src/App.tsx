import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  Chip,
  IconButton,
  CssBaseline,
  ThemeProvider,
  GlobalStyles,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Avatar,
  Divider,
  Link as MUILink,
} from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import CloudSyncOutlinedIcon from "@mui/icons-material/CloudSyncOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { makeTheme } from "./theme";

type Mode = "light" | "dark";

const services = [
  {
    title: "Administracija Mreže",
    desc: "Profesionalno upravljanje i nadzor mrežnih sistema za maksimalne performanse i stabilnost.",
    icon: <LanOutlinedIcon />,
    href: "#",
  },
  {
    title: "Održavanje Servera",
    desc: "Redovno održavanje, nadogradnja i optimizacija server infrastrukture za pouzdan rad.",
    icon: <DnsOutlinedIcon />,
    href: "#",
  },
  {
    title: "Backup & Disaster Recovery",
    desc: "Sistemi sigurnosnog kopiranja i brza obnova podataka u slučaju nepredviđenih situacija.",
    icon: <CloudSyncOutlinedIcon />,
    href: "#/dr",
  },
  {
    title: "Mrežna Sigurnost",
    desc: "Zaštita mreže od pretnji, kontrola pristupa i implementacija sigurnosnih politika.",
    icon: <SecurityOutlinedIcon />,
    href: "#",
  },
  {
    title: "Virtualizacija",
    desc: "Optimizacija IT resursa kroz virtuelne servere, desktop okruženja i cloud rešenja.",
    icon: <DevicesOutlinedIcon />,
    href: "#",
  },
  {
    title: "Monitoring Servera i Mrežne Infrastrukture",
    desc: "Kontinuirano praćenje performansi i proaktivna prevencija problema 24/7.",
    icon: <MonitorHeartOutlinedIcon />,
    href: "#",
  },
];

function PackageCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <Card sx={{ border: "1px solid", borderColor: "divider" }}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{title}</Typography>
          <Box component="ul" sx={{ m: 0, pl: 3 }}>
            {bullets.map((b, i) => (
              <Typography
                key={i}
                component="li"
                variant="body2"
                sx={{ opacity: 0.9 }}
              >
                {b}
              </Typography>
            ))}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

function DisasterRecoveryPage({ onBack }: { onBack: () => void }) {
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ backdropFilter: "blur(8px)" }}
      >
        <Toolbar sx={{ gap: 2, justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <ShieldOutlinedIcon />
            </Avatar>
            <Typography
              variant="h6"
              className="gradient-text"
              sx={{ fontWeight: 800 }}
            >
              SecureNet
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button variant="text" onClick={onBack}>
              Početna
            </Button>
            <Button variant="contained" onClick={onBack}>
              Kontakt
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}
        className="hero-grid"
      >
        <Container maxWidth="lg">
          <Stack spacing={2} textAlign="center" alignItems="center">
            <Typography
              variant="overline"
              color="secondary"
              sx={{ letterSpacing: 3 }}
            >
              Disaster Recovery
            </Typography>
            <Typography variant="h2">Disaster Recovery Paketi</Typography>
            <Typography sx={{ maxWidth: 900, opacity: 0.9 }}>
              Pouzdana Disaster Recovery (DR) rešenja su ključna za kontinuitet
              poslovanja. U slučaju kvara sistema, gubitka podataka ili cyber
              napada, važno je imati plan koji omogućava brz oporavak i nastavak
              rada bez značajnih gubitaka.
            </Typography>
            <Typography sx={{ maxWidth: 900, opacity: 0.9 }}>
              U nastavku su predstavljeni paketi DR usluga koji su prilagođeni
              različitim potrebama i budžetima – od malih firmi do velikih
              sistema sa kritičnim procesima.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Stack spacing={3} sx={{ mb: 6 }}>
          <PackageCard
            title="Starter Backup paket"
            bullets={[
              "Cloud backup (do 500 GB)",
              "Retencija: 7 dana",
              "RTO: 72h (ručnim vraćanjem)",
              "RPO: 24h (backup jednom dnevno)",
              "Podrška: radnim danima 9–17h",
            ]}
          />

          <PackageCard
            title="Basic+ DR paket"
            bullets={[
              "Cloud backup + mogućnost vraćanja na privremeni VM kod provajdera",
              "Retencija: 14 dana",
              "RTO: 12h",
              "RPO: 6h",
              "Jedno DR testiranje godišnje",
              "Podrška: 8–20h, radnim danima",
            ]}
          />

          <PackageCard
            title="Basic DR paket"
            bullets={[
              "Backup podataka na udaljenu lokaciju (cloud ili sekundarni data centar)",
              "Retencija: 7–14 dana",
              "RTO: 24h",
              "RPO: 12h",
              "Mogućnost testiranja DR plana 1x godišnje",
              "Podrška: radnim danima 9–17h",
            ]}
          />

          <PackageCard
            title="Standard DR paket"
            bullets={[
              "Backup + replikacija virtuelnih mašina u realnom vremenu",
              "Retencija: 30 dana",
              "RTO: 4h",
              "RPO: 1h",
              "Automatsko prebacivanje na DR sajt (failover)",
              "Testiranje DR plana 2x godišnje",
              "Podrška: 24/7 helpdesk",
            ]}
          />

          <PackageCard
            title="Premium DR paket"
            bullets={[
              "Aktivno-aktivno okruženje (glavni + DR site uvek aktivan)",
              "Replikacija u realnom vremenu (RPO: do 5 minuta)",
              "RTO: do 30 minuta",
              "Geo-redundantni data centri (npr. Beograd + Frankfurt)",
              "Neograničena retencija (dogovor po potrebi)",
              "Redovni DR testovi svaka 3 meseca",
              "Dedicated account manager i tehnička podrška 24/7",
            ]}
          />

          <Card sx={{ border: "1px solid", borderColor: "divider" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Napomena
              </Typography>
              <Typography sx={{ opacity: 0.9 }}>
                Za izradu konačne ponude potrebno je uzeti u obzir specifične
                potrebe klijenta: broj servera, veličinu podataka, okruženje
                (fizičko ili virtuelno), kao i lokaciju sekundarnog data centra.
                Na osnovu toga se izrađuje precizan plan i cena.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>

      <Box sx={{ py: 6, textAlign: "center", opacity: 0.75 }}>
        <Typography variant="body2">
          © 2025 SecureNet. Sva prava zadrzana.
        </Typography>
      </Box>
    </>
  );
}

export default function App() {
  const [mode, setMode] = React.useState<Mode>("dark");
  const theme = React.useMemo(() => makeTheme(mode), [mode]);

  const [route, setRoute] = React.useState<string>(
    window.location.hash || "#/"
  );
  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  const goToDR = () => {
    window.location.hash = "/dr";
  };
  const goHome = () => {
    window.location.hash = "/";
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={`a{text-decoration:none}`} />

      {route.startsWith("#/dr") ? (
        <DisasterRecoveryPage onBack={goHome} />
      ) : (
        <>
          {/* Header */}
          <AppBar
            position="sticky"
            elevation={0}
            sx={{
              background:
                theme.palette.mode === "dark" ? "#0b1220cc" : "#ffffffcc",
              backdropFilter: "blur(8px)",
              borderBottom:
                theme.palette.mode === "dark"
                  ? "1px solid #111827"
                  : "1px solid #e5e7eb",
            }}
          >
            <Toolbar sx={{ gap: 2, justifyContent: "space-between" }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <ShieldOutlinedIcon />
                </Avatar>
                <Typography
                  variant="h6"
                  className="gradient-text"
                  sx={{ fontWeight: 800 }}
                >
                  SecureNet
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                alignItems="center"
              >
                <Chip
                  size="small"
                  label="IT Administracija"
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  size="small"
                  label="Backup & Recovery"
                  color="primary"
                  variant="outlined"
                  clickable
                  onClick={goToDR}
                />
                <Chip
                  size="small"
                  label="Virtualizacija"
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  size="small"
                  label="24/7 Monitoring"
                  color="primary"
                  variant="outlined"
                />
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ ml: 1, display: { xs: "none", sm: "block" } }}
                />
                <IconButton
                  aria-label="toggle theme"
                  onClick={() =>
                    setMode((m) => (m === "dark" ? "light" : "dark"))
                  }
                  color="inherit"
                >
                  {mode === "dark" ? (
                    <LightModeOutlinedIcon />
                  ) : (
                    <DarkModeOutlinedIcon />
                  )}
                </IconButton>
              </Stack>
            </Toolbar>
          </AppBar>

          {/* Hero */}
          <Box
            className="hero-grid"
            sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 12 } }}
          >
            <Container maxWidth="lg">
              <Stack spacing={3} textAlign="center" alignItems="center">
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: 3 }}
                  color="secondary"
                >
                  Vaš partner za sigurnu i pouzdanu IT infrastrukturu
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 64 } }}>
                  <span className="gradient-text">IT Administracija</span> ·
                  Backup & Data Recovery · Virtualizacija · 24/7 Monitoring
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ maxWidth: 860, opacity: 0.9 }}
                >
                  Moderan, pregledan set usluga za kompanije koje zahtevaju
                  stabilnost, sigurnost i brz oporavak.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 2 }}
                >
                  <Button size="large" variant="contained" href="#usluge">
                    Naše usluge
                  </Button>
                  <Button size="large" variant="outlined" href="#kontakt">
                    Kontaktirajte nas
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </Box>

          {/* Services Heading */}
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              textAlign="center"
              sx={{ mt: 8 }}
              gutterBottom
            >
              Usluge
            </Typography>
            <Typography textAlign="center" sx={{ mb: 4, opacity: 0.85 }}>
              Naše glavne usluge za vašu kompaniju
            </Typography>
          </Container>

          {/* Services */}
          <Container maxWidth="lg">
            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
              gap={3}
              sx={{ my: 8 }}
            >
              {services.map((s, i) => (
                <Card key={i} sx={{ height: "100%" }}>
                  <CardActionArea
                    href={s.href}
                    onClick={(e) => {
                      if (s.href && s.href.startsWith("#/")) {
                        e.preventDefault();
                        window.location.hash = s.href.slice(1);
                      } else {
                        e.preventDefault();
                      }
                    }}
                  >
                    <CardContent>
                      <Stack spacing={2}>
                        <Avatar
                          sx={{
                            bgcolor: "primary.main",
                            width: 56,
                            height: 56,
                          }}
                        >
                          {s.icon}
                        </Avatar>
                        <Typography variant="h6">{s.title}</Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {s.desc}
                        </Typography>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          sx={{ pt: 1 }}
                        >
                          <MUILink
                            href={s.href}
                            underline="hover"
                            onClick={(e) => {
                              if (s.href && s.href.startsWith("#/")) {
                                e.preventDefault();
                                window.location.hash = s.href.slice(1);
                              } else {
                                e.preventDefault();
                              }
                            }}
                            color="primary"
                          >
                            Detaljnije
                          </MUILink>
                          <ArrowOutwardOutlinedIcon
                            fontSize="small"
                            color="primary"
                          />
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Container>

          {/* About / Kontakt */}
          <Box
            id="kontakt"
            sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}
          >
            <Container maxWidth="lg">
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                alignItems="stretch"
              >
                <Box flex={1}>
                  <Typography variant="h4" gutterBottom>
                    O nama
                  </Typography>
                  <Typography sx={{ opacity: 0.9, mb: 2 }}>
                    SecureNet je vaš partner za celokupnu IT infrastrukturu:
                    administracija, sigurnosne kopije, oporavak podataka,
                    virtualizacija i 24/7 monitoring. Naš pristup je proaktivan
                    — fokusirani smo na stabilnost sistema, bezbednost i brz
                    oporavak kako bismo minimizirali zastoje i rizike.
                  </Typography>
                  <Typography sx={{ opacity: 0.9 }}>
                    Implementiramo najbolje prakse, automatizujemo rutinske
                    procese i obezbeđujemo jasne SLA dogovore. Bilo da je u
                    pitanju malo ili srednje preduzeće, pomažemo da IT radi
                    pouzdano, bez iznenađenja.
                  </Typography>
                </Box>
                <Box flex={{ xs: 1, md: "0 0 420px" }}>
                  <Card
                    sx={{
                      border: "1px solid",
                      borderColor: "divider",
                      height: "100%",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6">Kontakt</Typography>
                      <Typography sx={{ mt: 1 }}>
                        Email:{" "}
                        <MUILink href="mailto:support@securenet.rs">
                          support@securenet.rs
                        </MUILink>
                      </Typography>
                      <Typography>Telefon: +381 11 123 456</Typography>
                      <Typography sx={{ mt: 1, opacity: 0.9 }}>
                        Radimo sa klijentima širom regiona i prilagođavamo
                        saradnju vašim potrebama — od jedokratnih intervencija
                        do potpunog upravljanja IT okruženjem.
                      </Typography>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{ mt: 2 }}
                        href="mailto:support@securenet.rs"
                      >
                        Zatraži ponudu
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              </Stack>
            </Container>
          </Box>

          {/* Footer */}
          <Box sx={{ py: 6, textAlign: "center", opacity: 0.75 }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} SecureNet — Sva prava zadržana.
            </Typography>
          </Box>
        </>
      )}
    </ThemeProvider>
  );
}
