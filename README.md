# FraudShield AI

A comprehensive fraud detection and prevention platform for Banking, E-commerce, and Telecommunications sectors in Morocco.

## 🚀 Features

- **Real-time Fraud Detection**: Machine learning models to detect fraudulent transactions in real-time
- **Multi-sector Support**: Specialized detection for Banking, E-commerce, and Telecom sectors
- **Dashboard Analytics**: Interactive dashboard with fraud metrics and visualizations
- **API Access**: RESTful API for integration with existing systems
- **User Management**: Role-based access control (Admin, Analyst, User)
- **Audit Logging**: Comprehensive logging of all system activities

## 🛠 Tech Stack

- **Backend**: FastAPI (Python 3.11+)
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Database**: PostgreSQL 15
- **Caching**: Redis
- **Machine Learning**: scikit-learn, XGBoost, LightGBM
- **Containerization**: Docker, Docker Compose
- **Infrastructure**: Designed for cloud deployment (AWS/GCP/Azure)

## 🏗 Project Structure

```
fraudshieldai-mvp/
├── fraudshieldai/               # Backend application
│   ├── app/                     # FastAPI application
│   │   ├── api/                 # API endpoints
│   │   ├── core/                # Core functionality
│   │   ├── crud/                # Database operations
│   │   ├── models/              # Database models
│   │   ├── schemas/             # Pydantic schemas
│   │   └── services/            # Business logic
│   ├── frontend/                # Frontend application
│   ├── ml/                      # Machine learning code
│   └── tests/                   # Test suite
├── init-db/                     # Database initialization scripts
├── .env.example                 # Example environment variables
├── docker-compose.yml           # Docker Compose configuration
├── Dockerfile                   # Main Dockerfile
├── Dockerfile.api               # API service Dockerfile
├── Dockerfile.ml                # ML service Dockerfile
└── requirements.txt             # Python dependencies
```

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Python 3.11+
- Node.js 18+ (for frontend development)
- PostgreSQL 15 (for local development without Docker)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fraudshieldai-mvp.git
   cd fraudshieldai-mvp
   ```

2. **Set up environment variables**
   ```bash
   cp config.env.example .env
   # Edit .env file with your configuration
   ```

3. **Start services with Docker Compose**
   ```bash
   docker-compose up -d
   ```

4. **Initialize the database**
   ```bash
   docker-compose exec api python init-db/init_db.py
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - API Documentation: http://localhost:8000/docs
   - PGAdmin: http://localhost:5050

## 🔧 Configuration

### Environment Variables

Key environment variables (see `.env.example` for all options):

```
# Application
APP_ENV=development
DEBUG=True
SECRET_KEY=your-secret-key
API_V1_STR=/api/v1

# Database
POSTGRES_SERVER=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=fraudshield

# Redis
REDIS_HOST=redis
REDIS_PORT=6379

# First Superuser
FIRST_SUPERUSER_EMAIL=admin@fraudshield.ai
FIRST_SUPERUSER_PASSWORD=admin123
```

## 🧪 Testing

Run tests using pytest:

```bash
# Run all tests
docker-compose exec api pytest

# Run specific test file
docker-compose exec api pytest tests/test_auth.py

# Run with coverage report
docker-compose exec api pytest --cov=app tests/
```

## 📚 API Documentation

Once the application is running, access the interactive API documentation at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For any questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com)

---

<div align="center">
  <sub>Built with ❤️ by the FraudShield AI Team</sub>
</div>
