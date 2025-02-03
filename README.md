
# Supreme group by BlackSof

React application build for the BlackSof assignment of Supreme Group. 
## Demo

https://supreme-group-blacksof.vercel.app/
https://github.com/hardik1452/supreme_group_blacksof/

## Installation

Install my-project with npm
1. Clone the repo
```bash
  git clone https://github.com/hardik1452/supreme_group_blacksof.git
```

2. Navigate to the project directory:
```bash
cd supreme_group_blacksof
```

3. Install dependencies:
```bash
  npm install
```

4. Start the server
```bash
  npm run dev
```
Application should run on: http://localhost:5173/
    
## Component Architecture Overview

The project is structured around a modular component-based architecture. The key components include:

App.js: The main entry point for the app.
Components/: Includes various sections of the page like Navbar,Button, MainContainer, GetInTouch, List, Footer,etc.
Assets: All the asset files for the project.


## Responsive Design Strategy
The project uses a mobile-first approach to ensure it works seamlessly across all devices:

CSS Flexbox & Grid Layouts are utilized for creating flexible and responsive layouts.
Media Queries are applied to adjust styles based on the screen size (e.g., mobile, tablet, desktop).

## Performance Optimization Techniques Employed
Performance optimization techniques were implemented using
Code Splitting using React's lazy loading and Suspense to reduce initial load times.

## Explanation of Third-Party Libraries Used
I have used the third party libraries as:
1. @mui/icons-material and its dependent Libraries
2. react-toastify for the notification
3. tailwindcss for beautiful styling

## Assumptions and Decisions
1. The app assumes that users have JavaScript enabled in their browsers.
2. A mobile-first design was prioritized, assuming that the majority of users will be on mobile devices.
3. I chose React for its component-based architecture and ecosystem, making it easier to build reusable UI components.
4. State management was handled using the React Context API for simplicity in a medium-sized application.

## Challenges and Solutions
1. I was facing difficult to implement the vehicle parts section so I have divided the parts of the div in such a way to tackle actual figma design.
2. I was facing the issue to implement new version of tailwindcss@v4 so I looked the internet to resolve the new simple integration to the project.
3. I was facing problems in validating the condition of form when user submits the form, so I analysed and took problems one by one and resolved it.

##Suggested Features and Improvements
1. Upcomig installation of router in the project to quickly navigate between the different section of url.
2. Integration with typescript.
3. Integration of framer motion or react spring.

## Additional Remarks
Even I have not integrated the typescript and framer motion/react spring, but I can assure that I can quickly adapt to typescript asap. To maintain this gap I have already started the typescript lessons. 