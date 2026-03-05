```mermaid
C4Component
  title Arquitectura Integral MLLB (Contexto, Contenedores y Componentes)

  %% 1. Actores y Sistemas Externos (Contexto)
  Person(cliente, "Cliente", "Hace pedidos, ve el menú y estado.")
  Person(admin, "Administrador", "Gestiona menú, stock y empleados.")
  Person(empleado, "Empleado", "Actualiza estado de pedidos asignados.")

  System_Ext(oauth, "Google / GitHub (OAuth)", "Proveedor de inicio de sesión.")
  System_Ext(sentry, "Sentry", "Plataforma de monitoreo de errores.")

  %% 2. El Sistema y sus Contenedores Principales
  System_Boundary(mllb, "Plataforma Me Lleva La Burger") {
    
    Container(spa, "Frontend Web (SPA)", "React 19, Vite, Tailwind", "Interfaz de usuario en el navegador.")
    ContainerDb(db, "Base de Datos", "PostgreSQL", "Almacenamiento (Usuarios, Pedidos, Menú).")

    %% 3. Los Componentes Internos del Backend (NestJS)
    Container_Boundary(api, "Backend API REST (NestJS)") {
      Component(auth, "AuthModule", "Passport, JWT, OAuth", "Autenticación")
      Component(customer, "CustomerModule", "NestJS", "Perfiles de clientes")
      Component(employee, "EmployeeModule", "NestJS", "Gestión de personal")
      Component(product, "ProductModule", "NestJS", "Catálogo de hamburguesas")
      Component(cart, "CartModule", "NestJS", "Carrito temporal")
      Component(order, "OrderModule", "NestJS", "Gestión y estados del pedido")
      Component(payment, "PaymentModule", "NestJS", "Procesamiento de cobros")
    }
  }

  %% Relaciones de Usuarios a Frontend
  Rel(cliente, spa, "Usa la plataforma", "HTTPS")
  Rel(admin, spa, "Administra", "HTTPS")
  Rel(empleado, spa, "Trabaja", "HTTPS")
  
  %% Relaciones a Sistemas Externos
  Rel(spa, oauth, "Redirige para login", "HTTPS")
  Rel(api, oauth, "Valida sesión OAuth", "HTTPS")
  Rel(spa, sentry, "Envía errores UI", "HTTPS")

  %% Relaciones de Frontend a Módulos del Backend
  Rel(spa, auth, "/auth/* (Login/Registro)", "JSON/HTTPS")
  Rel(spa, product, "/products (Muestra Menú)", "JSON/HTTPS")
  Rel(spa, cart, "/cart (Agrega al carrito)", "JSON/HTTPS")
  Rel(spa, order, "/orders (Finaliza el pedido)", "JSON/HTTPS")

  %% Relaciones Internas del Backend
  Rel(cart, product, "Consulta disponibilidad/precios", "Llamada interna")
  Rel(order, cart, "Convierte carrito en orden firme", "Llamada interna")
  Rel(order, payment, "Inicia cobro", "Llamada interna")

  %% Relaciones a Base de Datos
  Rel(customer, db, "Lee/Escribe", "TypeORM/TCP")
  Rel(employee, db, "Lee/Escribe", "TypeORM/TCP")
  Rel(product, db, "Lee/Escribe", "TypeORM/TCP")
  Rel(order, db, "Lee/Escribe", "TypeORM/TCP")

```
