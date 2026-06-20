-- Default admin user (password: admin123 - change in production!)
-- Password hash generated with: bcrypt.hashSync('admin123', 10)
INSERT INTO users (username, password_hash) VALUES 
  ('admin', '$2b$10$YourHashedPasswordHere');

INSERT INTO images (url, description, category) VALUES
('/img/design1.jpg', 'Logo minimalista para TechStartup', 'branding'),
('/img/design2.jpg', 'Identidad visual corporativa para GreenCo', 'branding'),
('/img/design3.jpg', 'Rediseño de marca para FoodieApp', 'branding'),
('/img/design4.jpg', 'Paleta de colores para WellnessStudio', 'branding'),
('/img/design5.jpg', 'Logotipo para CyberSecurity Corp', 'branding'),
('/img/design6.jpg', 'Banner promocional digital para SaleEvent', 'digital'),
('/img/design7.jpg', 'Publicación de Instagram para FitnessBrand', 'digital'),
('/img/design8.jpg', 'Anuncio de Facebook para TravelAgency', 'digital'),
('/img/design9.jpg', 'Email header para Newsletter', 'digital'),
('/img/design10.jpg', 'Thumbnail de YouTube para TechChannel', 'digital'),
('/img/design11.jpg', 'Flyer impreso para Concierto', 'impresion'),
('/img/design12.jpg', 'Volante promocional para Restaurante', 'impresion'),
('/img/design13.jpg', 'Poster A3 para Exhibition', 'impresion'),
('/img/design14.jpg', 'Tarjeta de presentación corporativa', 'impresion'),
('/img/design15.jpg', 'Brochure trifold para Inmobiliaria', 'impresion'),
('/img/design16.jpg', 'Invitación para WeddingParty', 'eventos'),
('/img/design17.jpg', 'Programa de mano para GalaNight', 'eventos'),
('/img/design18.jpg', 'Credencial para Conference', 'eventos'),
('/img/design19.jpg', 'Backdrop para PhotoBooth', 'eventos'),
('/img/design20.jpg', 'Menú de mesa para Banquete', 'eventos'),
('/img/design21.jpg', 'Caja de cosméticos para BeautyBrand', 'packaging'),
('/img/design22.jpg', 'Etiqueta de botella para CraftBeer', 'packaging'),
('/img/design23.jpg', 'Empaque de café para ArtisanCoffee', 'packaging'),
('/img/design24.jpg', 'Caja de zapatos para ShoeBrand', 'packaging'),
('/img/design25.jpg', 'Envoltorio de chocolate para ChocoLab', 'packaging');
