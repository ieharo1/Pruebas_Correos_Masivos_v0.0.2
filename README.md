# 💻 C# DESDE CERO - GUÍA COMPLETA

**C# desde Cero** es un sitio educativo completo diseñado para enseñar C# desde los fundamentos hasta conceptos avanzados, con explicaciones claras, ejemplos prácticos y código listo para usar.

> *"C# is a modern, object-oriented, and type-safe programming language used to build secure and robust applications."*

---

## 🎯 ¿Qué es este Proyecto?

Este proyecto proporciona un recurso educativo gratuito para aprender C#, incluyendo:

- **Documentación completa** de cada tema
- **Ejemplos de código** listos para ejecutar
- **Ejercicios prácticos** para reforzar el aprendizaje
- **Sitio web educativo** con navegación intuitiva

---

## 📚 Contenido del Curso

### Módulo 1: Fundamentos

1. **Introducción**
   - Historia de C#
   - .NET y .NET Core
   - Casos de uso

2. **Instalación**
   - .NET SDK
   - Visual Studio / VS Code
   - Primer programa
   - Configuración del entorno

3. **Conceptos básicos**
   - Variables y tipos de datos
   - Operadores
   - Estructuras de control
   - Funciones y métodos

### Módulo 2: Intermedio

4. **Ejemplos prácticos**
   - Programación orientada a objetos
   - Colecciones y genéricos
   - LINQ
   - Manejo de excepciones

5. **Buenas prácticas**
   - Async/await
   - Dependency Injection
   - Unit testing
   - Code style y analyzers

### Módulo 3: Avanzado

6. **Casos reales**
   - ASP.NET Core Web API
   - Entity Framework Core
   - Blazor
   - Xamarin/.NET MAUI

7. **Proyecto final**
   - Aplicación completa
   - Deploy a producción
   - CI/CD con GitHub Actions

---

## 🗂️ Estructura del Proyecto

```
Pruebas_Correos_Masivos_v0.0.2/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos del sitio
├── js/
│   └── main.js         # JavaScript del sitio
└── README.md
```

---

## 🚀 Cómo Usar este Proyecto

### Opción 1: Navegar el Sitio Web

1. Abre `index.html` en tu navegador
2. Navega por las secciones del curso
3. Haz clic en los temas para ver la documentación detallada

### Opción 2: Ejecutar los Ejemplos

1. Instala .NET SDK
2. Crea proyecto con `dotnet new`
3. Ejecuta con `dotnet run`

### Requisitos

- .NET 7.0 o superior
- Visual Studio 2022 o VS Code

---

## 📝 Ejemplos Rápidos

### Variables y Tipos

```csharp
using System;

// Tipos de valor
int edad = 30;
double altura = 1.75;
bool esEstudiante = true;
char inicial = 'J';

// Tipos de referencia
string nombre = "Juan";
var hobbies = new List<string> { "leer", "codificar" };

// Nullable
int? calificacion = null;
```

### Funciones

```csharp
// Método básico
public string Saludar(string nombre)
{
    return $"Hola {nombre}";
}

// Expresión lambda
var cuadrado = (int x) => x * x;

// Async method
public async Task<string> ObtenerDatosAsync()
{
    await Task.Delay(1000);
    return "Datos";
}
```

### Clases

```csharp
public class Persona
{
    // Propiedades
    public string Nombre { get; set; }
    public int Edad { get; private set; }

    // Constructor
    public Persona(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }

    // Método
    public void Saludar()
    {
        Console.WriteLine($"Hola, soy {Nombre}");
    }

    // Método estático
    public static Persona Crear(string nombre)
    {
        return new Persona(nombre, 0);
    }
}
```

### LINQ

```csharp
using System.Linq;

var numeros = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Query syntax
var pares = from n in numeros
            where n % 2 == 0
            select n;

// Method syntax
var impares = numeros.Where(n => n % 2 != 0).ToList();

// Proyección
var cuadrados = numeros.Select(n => n * n);

// Agregación
var suma = numeros.Sum();
var promedio = numeros.Average();
var maximo = numeros.Max();
```

### Async/Await

```csharp
public async Task<List<string>> ObtenerUsuariosAsync()
{
    using var client = new HttpClient();
    var response = await client.GetAsync("https://api.example.com/users");
    var json = await response.Content.ReadAsStringAsync();
    return JsonSerializer.Deserialize<List<string>>(json);
}

// Parallel execution
var tasks = new[]
{
    ObtenerDatosAsync(),
    ObtenerUsuariosAsync(),
    ObtenerConfiguracionAsync()
};

await Task.WhenAll(tasks);
```

---

## 🎓 Metodología de Aprendizaje

### 1. Leer la Teoría
Cada tema comienza con una explicación clara del concepto.

### 2. Ver Ejemplos
Los ejemplos de código muestran la aplicación práctica.

### 3. Practicar
Los ejercicios te permiten aplicar lo aprendido.

### 4. Experimentar
Modifica los ejemplos para entender cómo funcionan.

---

## 🔧 Comandos Esenciales

### .NET CLI

```bash
# Ver versión
dotnet --version

# Crear nuevo proyecto
dotnet new console -n MiApp
dotnet new webapi -n MiApi

# Restaurar paquetes
dotnet restore

# Compilar
dotnet build

# Ejecutar
dotnet run

# Publicar
dotnet publish -c Release

# Tests
dotnet test

# Agregar paquete
dotnet add package Newtonsoft.Json
```

---

## 📖 Recursos Adicionales

### Documentación Oficial

- [Microsoft C# Docs](https://docs.microsoft.com/es-es/dotnet/csharp/)
- [.NET Documentation](https://docs.microsoft.com/dotnet/)
- [C# Programming Guide](https://docs.microsoft.com/dotnet/csharp/programming-guide/)

### Herramientas Recomendadas

- **Visual Studio 2022** - IDE completo
- **VS Code** + C# extension
- **ReSharper** - Productividad
- **Rider** - IDE de JetBrains

### Comunidades

- [.NET Community](https://dotnet.microsoft.com/community)
- [Stack Overflow - C#](https://stackoverflow.com/questions/tagged/c%23)
- [Reddit r/csharp](https://www.reddit.com/r/csharp/)

---

## 💡 Consejos para Principiantes

1. **Usa .NET Core/.NET 5+**: Es moderno y cross-platform.
2. **Aprende LINQ**: Es fundamental para trabajar con datos.
3. **Entiende async/await**: Es crucial para rendimiento.
4. **Usa nullable reference types**: Previene null reference exceptions.
5. **Escribe tests**: xUnit es excelente para C#.

---

## ⚠️ Mejores Prácticas

### Código Limpio

- Sigue las convenciones de C#
- Usa var cuando el tipo es obvio
- Nombra claramente variables y métodos

### Rendimiento

- Usa Span<T> para manipulación de strings
- Evita boxing/unboxing innecesario
- Usa async para I/O operations

### Seguridad

- Valida siempre los inputs
- Usa parameterized queries con EF Core
- Implementa authentication/authorization

---

## 🧪 Ejercicios Prácticos

### Nivel Básico

1. Calculadora de consola
2. Gestor de tareas
3. Juego de adivinar números

### Nivel Intermedio

1. API REST con ASP.NET Core
2. Aplicación con Entity Framework
3. Blazor Server app

### Nivel Avanzado

1. Microservicios con .NET
2. Aplicación multiplataforma con MAUI
3. Sistema con Azure Functions

---

## 👨‍💻 Desarrollado por Isaac Esteban Haro Torres

**Ingeniero en Sistemas · Full Stack · Automatización · Data**

- 📧 Email: zackharo1@gmail.com
- 📱 WhatsApp: 098805517
- 💻 GitHub: https://github.com/ieharo1
- 🌐 Portafolio: https://ieharo1.github.io/portafolio-isaac.haro/

---

© 2026 Isaac Esteban Haro Torres - Todos los derechos reservados.
