# Portfolio App

This is a personal portfolio application built using Next.js and Tailwind CSS. The app showcases projects, skills, and contact information in a clean, responsive design.

## Features

- **Responsive Design**: Works on all devices, from mobile to desktop.
- **Project Showcase**: Displays your projects with descriptions, images, and links.
- **Skills Section**: Lists your skills and technologies.
- **Contact Form**: Allows visitors to send you messages directly.
- **Smooth Navigation**: Seamless transitions and easy-to-use interface.
- **Dark Mode**: Option for dark and light themes.

## Technologies Used

- Next.js
- Tailwind CSS

## Live Demo

Check out the live demo of the app [here](https://main--azeez-portfolio-1.netlify.app/).

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Git (optional, for cloning the repository)

### Installation

1. **Clone the repository** (optional):

   ```bash
   git clone https://github.com/Abdelaziz79/portfolio-app.git
   cd portfolio-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Deploy

1. **Build the project**:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start the production server**:

   ```bash
   npm start
   # or
   yarn start
   ```

3. **Deploy**:

   Follow the deployment instructions for your preferred hosting service. For example, you can deploy to Vercel by connecting your GitHub repository and following Vercel's deployment guide.

### Usage

1. **Customization**:

   - Update the `data` folder with your personal information, projects, and skills.
   - Customize the styling in the `styles` folder if needed.

2. **Adding Projects**:

   - Add your project details in the `/src/app/components/Projects` file. Include the project name, description, image, and link.

3. **Updating Skills**:

   - Add your skills in the `/src/app/components/Skills` file. Include the skill name and optionally an icon.

4. **Contact Form**:

   - The contact form can be configured to send emails to your address. Update the form submission logic in the `pages/api/contact.js` file.

### Project Structure

- `components`: Contains reusable React components
- `pages`: Contains Next.js pages
- `public`: Contains static assets like images
- `styles`: Contains Tailwind CSS and custom styles

### Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework used to build this app
- [Tailwind CSS](https://tailwindcss.com/) - The utility-first CSS framework used for styling
- The open-source community for their invaluable contributions and support

## Contact

For any questions or inquiries, please contact [aelhadry484@gmail.com](mailto:your.email@example.com).
