import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import Kesif from "../../img/kesif.png";
import Danisman from "../../img/danisman.png";

function ServicesContent() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "rgb(238, 238, 238)",
        contrastText: "#fff",
      },
      secondary: {
        main: "rgb(57, 62, 70)",
        contrastText: "#fff",
      },
    },
  });
  return (
    <Box bgcolor={theme.palette.neutral.main}>
      <Container maxWidth="lg">
        <Box padding={5}>
          <Grid container m={0} spacing={1}>
            <Typography align="center" width="100%" variant="h4">
              Hizmetlerimiz
            </Typography>
            <Typography align="center" width="100%" variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              tempora?
            </Typography>
          </Grid>
        </Box>
        <Box mt={10} paddingBottom={5}>
          <Grid
            container
            m={0}
            spacing={2}
            align="center"
            bgcolor={theme.palette.neutral.contrastText}
          >
            <Grid
              xs={12}
              md={6}
              border={1}
              borderRadius={2}
              padding={4}
              boxShadow="4"
            >
              <img src={Kesif} alt="" width="100px" />
              <Typography align="center" width="100%" variant="h5">
                Keşif-Metraj
              </Typography>
              <Typography align="start" width="80%" variant="body2">
                <p>
                  Metraj, gerçekleştirilen ya da planlanan bir işin, kullanılan
                  ya da kullanılacak malzemenin miktarını belirlemek için
                  yapılan ölçümler, hesaplar ve işlemlerdir. Metrajın tanımında
                  bahsedilen bu miktar kavramı; uzunluk, alan, hacim, ağırlık
                  gibi ölçü birimlerini, adet, paket, kutu, palet, kamyon, tır,
                  vb. ölçeklerdeki tanımlamaları ya da daha farklı
                  ölçüm/gruplama yöntemlerini içerebilir. Dolayısıyla metraj
                  işleminin net bir birimi olmayıp, yapılacak hesapta
                  sayılacak/hesaplanacak şey esastır.
                </p>
                <p>
                  “Proje içerisinde bulunan ve cinsleri farklı olan tüm
                  imalatların ayrı ayrı miktarlarının hesaplanmasına metraj
                  denir.”
                </p>
                <h6>
                  <b>İHALE DOSYASI HAZIRLAMA HİZMETİ</b>
                </h6>
                <ul>
                  <li>Metraj Hesaplarının Yapılması</li>
                  <li>Uygulama Şartnameleri Hazırlanması</li>
                  <li>Detay Mahal Listelerinin Hazırlanması</li>
                  <li>Fiyatlandırma Hizmetleri</li>
                </ul>
                <p>
                  Yaklaşık maliyet ve ihale dosyası hazırlama işi; proje
                  hizmetleri altında olsa da aslında bu disiplinin dışında yoğun
                  matematiksel işlemler gerektiren ayrı bir uzmanlıktır.
                </p>
                <h6>
                  <b>Bir ihale dosyası içinde aynı anda;</b>
                </h6>
                <ul>
                  <li>Metraj hesaplarının yapılması,</li>
                  <li>Uygulama detay şartnamelerin hazırlanması,</li>
                  <li>
                    Hangi imalatın nerede yapılacağını belirten detaylı mahal
                    listelerinin hazırlanması,
                  </li>
                  <li>
                    Özel imalatlar için piyasa fiyat araştırması ve analiz
                    yapılması işlemleri birlikte yapılır.
                  </li>
                </ul>
              </Typography>
              <ThemeProvider theme={theme}>
                <Button
                  fullWidth
                  href="/Contect"
                  color="secondary"
                  variant="contained"
                >
                  İletişim İçin Tıklayın
                </Button>
              </ThemeProvider>
            </Grid>
            <Grid
              xs={12}
              md={6}
              border={1}
              borderRadius={2}
              padding={4}
              boxShadow="4"
            >
              <img src={Danisman} alt="" width="75px" />
              <Typography align="center" width="100%" variant="h5">
                Danışmanlık
              </Typography>
              <Typography align="start" width="80%" variant="body2">
                <ul>
                  <li>
                    Daha önceden hazırlanmış olan statik projelerin kontrolü ve
                    eksikliklerinin tespit edilmesi. Bu aşamada özellikle dikkat
                    edilen konu, yapının planlanan kolonlar üzerinde rahatlıkla
                    durup duramayacağı ve ne kadar dayanıklı olacağıdır.
                  </li>
                  <li>
                    {" "}
                    Statik projede, binanın yüksekliği, bölgenin deprem
                    bölgesinde olup olmadığı ve olası bir deprem felaketinde
                    sonuçlarının neler olabileceği gibi konuların incelenmesi
                  </li>
                  <li>
                    Hazırlanan statik projede, binanın yüksekliği, bölgenin
                    deprem bölgesinde olup olmadığı ve olası bir deprem
                    felaketinde sonuçlarının neler olabileceği gibi konuların
                    incelenmesi
                  </li>
                  <li>
                    En önemli konulardan biri olarak, zeminin uygunluğu ve
                    statik projede yer alan plana uygun olup olmadığının
                    incelenmesi
                  </li>
                  <li>
                    Statik proje konusunda herhangi bir akademik danışmanlık
                    durumuna ihtiyaç duyulup duyulmadığının tespit edilmesi ve
                    eğer ihtiyaç var ise bu konuda çeşitli akademik kuruluşlara
                    başvurulması
                  </li>
                  <li>
                    Gerekli görüldüğü durumlarda eğer statik projenin üniversite
                    onayından geçmesi isteniyor ise, üniversitelerin ilgili
                    bölümlerinden bu konuda inceleme talep edilmesi ve
                    onaylanmasının sağlanması
                  </li>
                  <li>Yapılan projede maliyet kontrolü yapılması</li>
                  <li>
                    Proje yapım esnasında üretim ve inşaat kalitesinin kontrolü
                  </li>
                  <li>
                    Girilmesi düşünülen devlet ihalelerinde ihale kontrolü,
                    evrak hazırlanması, yaklaşım maliyet tespiti ve ihale
                    yönetimi
                  </li>
                  <p>
                    Özer Proje olarak proje ihalelerine giren firmalara hem
                    statik anlamda çözüm ortaklığı yapıyoruz hem de ihale
                    danışmanlığı yapmaktayız.
                  </p>
                </ul>
              </Typography>
              <ThemeProvider theme={theme}>
                <Button
                  fullWidth
                  href="/Contect"
                  color="secondary"
                  variant="contained"
                >
                  İletişim İçin Tıklayın
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default ServicesContent;
