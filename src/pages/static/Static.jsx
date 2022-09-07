import { Accordion, Row, Col, ListGroup } from "react-bootstrap";
import "./static.css";

function Static() {
  return (
    <div className="s">
      <h2 className="static-h">Statik Projeler</h2>
      <Row xs={2} md={4} className="g-1 mt-4 w-100">
        <Col>
          <Accordion defaultActiveKey={["1"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Statik Proje Nedir? </Accordion.Header>
              <Accordion.Body>
                Yapının betonarme, yığma ya da çelik olma durumuna göre binanın
                taşıyıcı sistemlerinin ne şekilde yapılacağını gösteren, bodrum
                kat da dahil olmak üzere tüm kat ve çatı planları, iskele
                sistemi ile bunların kesitleri ve detaylarını içeren planlama ve
                hesap işlemlerine Statik Proje denir.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Özer Proje</Accordion.Header>
              <Accordion.Body>
                yapı uzmanlık alanında betonarme, çelik projeleri hizmeti
                sunmaktadır. Kuruluşundan günümüze inşaat mühendisliği alanında
                yurt içinde çeşitli projeler gerçekleştirmiş olup, değişen dünya
                koşullarına uygun, bilimsel teknolojik gelişmelerle
                desteklenmiş, en iyi ve en doğru projeleri sunmayı amaç
                edinmiştir Tasarım, tasarım geliştirme, avan proje, kesin proje,
                uygulama ve detay projeleri ve ihale dosyası hazırlanması gibi
                çeşitli proje aşamalarının gerçekleşmesiyle ilgili hizmetlerdir.
                Uzman ekibimiz ile <b>3E (Emniyet > Ekonomik > Estetik)</b>{" "}
                kapsamında sizlere daha iyi hizmet vermek istiyoruz.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <div className="s-list">
            <h3>Sağlık Yapıları</h3>
            <ListGroup>
              <ListGroup.Item className="lg-i">
                Kütahya Tavşanlı İlçe Yataklı Devlet Hastanesi
              </ListGroup.Item>
              <ListGroup.Item className="lg-i">
                Kastamonu Çatalzeytin İlçe Yataklı Devlet Hastanesi
              </ListGroup.Item>
              <ListGroup.Item className="lg-i">
                Ordu Aybastı İlçe Devlet Devlet Hastanesi
              </ListGroup.Item>
              <ListGroup.Item className="lg-i">
                Batman Gercüş İlçe Devlet Hastanesi
              </ListGroup.Item>
              <ListGroup.Item className="lg-i">
                Sakarya Ferizli İlçe Devlet Hastanesi
              </ListGroup.Item>
              <ListGroup.Item className="lg-i">
                İstanbul Şile İlçe Devlet Hastanesi
              </ListGroup.Item>
              <ListGroup.Item className="lg-i">
                Kırıkkale Keskin İlçe Devlet Hastanesi
              </ListGroup.Item>
              <ListGroup.Item className="lg-i">
                Denizli Tavas İlçe Devlet Hastanesi
              </ListGroup.Item>
              <ListGroup.Item className="lg-i">
                Tip Aile Sağlıklı Yaşam Merkezleri
              </ListGroup.Item>
              <ListGroup.Item className="lg-i">
                Tip Göçmen Sağlıklı Yaşam Merkezleri
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col>
          <h3>Spor Yapıları</h3>
          <ListGroup>
            <ListGroup.Item className="lg-i-1">
              Ankara Beypazarı 1000 Kişilik Spor Salonu
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Antalya Aksu 1000 Kişilik Spor Salonu
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Erzincan Merkez 1000 Kişilik Spor Salonu
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Balıkesir Merkez 1000 Kişilik Spor Salonu
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Çorum Merkez 3500 Kişilik Spor Salonu
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Manisa Yunus Emre Tenis Kortu
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Akhisar Spor Salonu
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Tokat Spor Salonu
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Çeşitli Gençlik Merkezleri
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Atatürk Üniversitesi Olimpik Yüzme Havuzu
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-1">
              Mersin Engelsiz Yaşam Merkezi
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h3>Karma Yapılar</h3>
          <ListGroup>
            <ListGroup.Item className="lg-i-2">Ekkoköy AVM</ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Marmara Ormancılık Araştırma Enstitüsü Müdürlüğü
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Batman Orman İşletme Müdürlüğü
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Yalova Orman İşletme Müdürlüğü
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Bursa Orman Bölge Müdürlüğü Lojman Binaları
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Yalova Hal Kompleks
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Mogan Gölü 1. ve 3. Etap Kıyı Bandı Projesi
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Nevşehir Orman İşletme Müdürlüğü
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Nevşehir Devlet Su İşleri Müdürlüğü
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Nevşehir Doğa Koruma ve Milli Parklar Müdürlüğü
            </ListGroup.Item>
            <ListGroup.Item className="lg-i-2">
              Nevşehir Meteoroloji Genel Müdürlüğü
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Static;
