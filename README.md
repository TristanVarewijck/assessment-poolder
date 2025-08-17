# LP Data Visualizer

A modern web application for visualizing and analyzing liquidity pool (LP) data from decentralized exchanges (DEXs). Built with Next.js and shadcn/ui, this tool provides an intuitive interface to explore LP data from various protocols including Beefy Finance.

## 📖 Description

This project was developed as a technical assessment for Poolder, demonstrating the ability to work with blockchain data APIs and create user-friendly interfaces for financial data visualization. The application fetches real-time LP data from the Beefy Finance API and presents it in an organized, interactive format.

The tool allows users to:

- Browse available DEX protocols
- Filter and view specific protocol data
- Analyze pool information including prices, token balances, and total supply
- Copy data values for external analysis
- View formatted token names and balances

## ✨ Features

- **Multi-Protocol Support**: Browse and filter data from various DEX protocols
- **Real-Time Data**: Fetch live LP data from Beefy Finance API
- **Interactive Interface**: Modern, responsive UI built with shadcn/ui components
- **Smart Data Formatting**: Automatic token name extraction and formatting
- **Copy Functionality**: One-click copying of numerical values with visual feedback
- **Responsive Design**: Optimized for desktop and mobile devices
- **Error Handling**: Comprehensive error states and loading indicators
- **Data Visualization**: Clean table layout with sortable columns and hover effects

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15 with React 19
- **UI Components**: shadcn/ui with Tailwind CSS
- **Icons**: Lucide React
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **HTTP Client**: Native fetch API
- **Development**: ESLint, Prettier, Jest for testing

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd LP-visualized
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
LP-visualized/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/               # API routes
│   │   │   └── asset-data/    # Asset data endpoints
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main page
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── BroadOverview.tsx # Overview statistics
│   │   ├── Controls.tsx      # DEX selection controls
│   │   ├── DataTable.tsx     # Main data table
│   │   ├── CopyString.tsx    # Copy functionality
│   │   └── ErrorMessage.tsx  # Error display
│   ├── lib/                  # Utility functions
│   │   ├── utils.ts          # Helper functions
│   │   └── db/               # Database configuration
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run format` - Format code with Prettier

## 📊 API Integration

The application integrates with the [Beefy Finance LP API](https://api.beefy.finance/lps/breakdown) to fetch:

- **Protocol Information**: Available DEX protocols and their metadata
- **Pool Data**: Individual LP pool details including prices, balances, and supply
- **Token Information**: Underlying asset details and contract addresses

## 🎨 UI Components

Built with shadcn/ui for consistent, accessible design:

- **Cards**: Organized data sections
- **Tables**: Responsive data display
- **Buttons**: Interactive controls
- **Select**: DEX protocol selection
- **Alerts**: Error and status messages
- **Badges**: Visual indicators

## 📝 License

This project is developed as a technical assessment and is not intended for commercial use. All rights reserved.

## 🙏 Acknowledgments

Special thanks to **Poolder** for providing this opportunity to demonstrate technical skills and creativity. This project showcases the ability to work with blockchain data APIs, modern web technologies, and create user-friendly financial data visualization tools.

---

_Built with ❤️ for the Poolder technical assessment_
