import { Link } from 'gatsby';
import { TiArrowBackOutline } from '@react-icons/all-files/ti/TiArrowBackOutline';
import Layout from '../components/Layout';
import ContentWrapper from '../components/ContentWrapper';

const NotFoundPage = () => {
  return (
    <Layout>
      <ContentWrapper>
        <div className="flex flex-col items-center my-24 space-y-4">
          <svg viewBox="0 0 405.624 385.766" className="w-52">
            <path
              fill="#a0fff0"
              d="M377.404 328.195c-3.857.028-7.656 1.015-11.395 1.892-3.194.723-2.066.48-9.991 2.453-4.661 1.333-13.184 1.865-25.308 2.205-18.442.737-36.961-.166-55.302 2.296-19.934 2.053-49.843 8.588-59.444 9.503-29.587 2.857-59.365-.496-89.036.5-10.732-.213-11.837.553-16.9-.999a15.171 15.171 0 0 1-.709-.727 101.31 101.31 0 0 0-.41-.586c-4.96-8-9.537-28.512-10.462-39.763-1.442-11.17-1.238-10.108-3.069-21.029-.643-2.984-.668-6.159-2.005-8.938 1.611 3.92-.044-2.403-2.028-3.058-3.225-2.829-8.572-1.526-10.699 1.982-7.121 5.393-8.634 14.995-8.806 23.567-.54 13.36 1.219 26.65 1.999 39.966.858 9.282.563 18.953 3.405 27.897 6.094 15.93 25.513 17.973 40.3 19.511 24.784 2.516 49.562-.796 74.213-3.232 22.87-1.99 45.854-2.007 68.75-3.637 12.057-.65 24.148-.882 36.164-2.14 12.664-1.207 25.27-3.133 37.994-3.62 24.406-.163 45.495 2.761 53.08-26.426 3.188-8.475-.637-17.192-10.341-17.617Zm-300.6-30.941c-.92-5.747-1.914-15.522 3.28-22.118a6.128 6.128 0 0 0-.188.596c-.018.4-.012.799-.025 1.198.012-.055.021-.119.035-.167-.019.072-.023.132-.036.197-.007.247-.01.494-.015.74l-.086-.011c-.006.043-.007.07-.014.117l.01-.118-.13-.017c.017.351.028.547.037.683a3.8 3.8 0 0 0-.053.542c-.272 10.61-.561 21.289-.384 31.14-.963-4.229-1.82-8.48-2.431-12.782Z"
            />
            <path
              fill="#a0fff0"
              d="M79.769 277.689c.034-.29.061-.513.101-.729l.001-.03a6.758 6.758 0 0 0-.106.758Zm288.72-115.469c-1.964-7.34-10.059-10.38-17.036-10.3l.09.069c-3.37-.281-7.039.202-10.237.107-8.095.036-16.19.117-24.27.646-14.248 1.069-28.545 1.319-42.776 2.61-13.014 1.208-25.882 3.523-38.747 5.764-21.695 3.808-36.136 4.612-62.475 8.41-21.588 2.983-33.318 5.633-54.173 2.037a119.855 119.855 0 0 1-19.8-5.312l-.5-.2c.733.312.711.362-.604-.237l-.035-.017-.332-.132.288.112c-3.42-1.414-6.465-3.603-9.936-4.886-4.554-1.593-9.995 1.93-9.611 6.944 1.404 8.18 7.644 15.159 14.732 19.152 10.98 5.977 23.45 6.63 35.69 6.12a91.217 91.217 0 0 0 11.403 1.448c2.957.209 5.911.27 8.864.226 13.947 1.692 27.97-.085 41.942-.604 10.82-.591 21.666-.24 32.484-.842 11.24-.583 22.405-2.035 33.566-3.438 13.03-1.556 26.124-2.864 39.26-2.802 16.929.04 33.783 1.764 50.669 2.738.297.026.594.044.892.06a21.414 21.414 0 0 0 3.221.288c5.69-.395 10.46-4.382 13.15-9.238 1.862-4.071 1.274-2.607 3.581-10.19a14.991 14.991 0 0 0 .7-8.532Zm-19.924 10.434c-.074.3-.175.592-.258.89-.101-.01-.203-.005-.305-.017l.297.04-.004.013c-1.614-.217-3.231-.41-4.853-.569l.17-.01c1.566-.21 3.257-.26 4.953-.347Z"
            />
            <path
              fill="#a0fff0"
              d="M98.565 166.052c-.18-.077-.42-.173-.683-.275l.044.02.639.255Z"
            />
            <path d="M15.687 2.917c-11.39.283-11.36 16.97 0 17.283 11.39-.282 11.36-16.97 0-17.283ZM44.862 0c-11.39.282-11.36 16.97 0 17.282C56.252 17 56.222.313 44.862 0ZM69.66 0c-11.39.282-11.36 16.97 0 17.282C81.052 17 81.022.313 69.66 0Zm314.77 142.6c-3.45-13.534-2.86-21.742-4.65-38.04-.7-7.982-2.334-15.89-6.05-23.052-4.432-8.66-12.601-14.666-20.68-19.716-15.88-10.323-35.106-4.773-52.647-3.544-27.072 1.95-54.287 1.375-81.337 3.798-14.06.93-42.081 5.803-49.025 6.68-29.248 3.55-58.623 6.112-87.84 9.919-1.573.25-3.138.55-4.7.86 1.903.027 3.806.055 5.706.163 27.913 1.728 55.885 3.448 83.867 2.862 17.341-.562 34.532-3.133 51.856-3.986 25.61-1.516 51.27-1.779 76.889-3.01 12.627-.868 35.772-4.152 40.563-2.5a36.768 36.768 0 0 1 4.092 1.365c-.604-.29-.792-.45.426.166.296.12.599.222.892.348a6.311 6.311 0 0 1-.59-.202 21.2 21.2 0 0 0 1.099.498q1.846.875 3.62 1.888c7.032 4.485 5.405 3.042 11.469 9.037.513.64.752.925.808.98.176.243.358.482.517.736a40.438 40.438 0 0 1 2.809 5.197c3.575 9.787 3.156 13.438 3.75 16.102 1.456 11.589 1.673 23.35 4.551 34.728 4.66 19.216 7.72 21.513.826 28.678-17.086 14.143-63.621 12.702-100.387 13.448-12.098.345-24.226.176-36.287 1.297-17.326 2.065-34.635 4.444-52.108 4.784-22.553.627-45.09-.91-67.598-2.142-9.092-.329-20.815-3.507-24.748-7.55-6.624-6.613-8.44-11.342-11.676-23.268-5.021-17.418-8.901-40.567-11.519-55.646a77.891 77.891 0 0 1-.81-13.77c.106-2.466.116-5.138 1.64-7.212 1.067-1.455 2.804-1.927 4.475-2.325 3.448-.868 6.948-1.512 10.427-2.24-6.333.802-15.69-1.577-18.795 5.56-2.694 7.326-2.492 15.42-2.146 23.119.567 8.576 1.175 17.154 2.133 25.697a277.371 277.371 0 0 0 7.74 42.15c6.715 18.626 20.47 26.347 39.506 28.217 27.533 1.837 55.24 3.978 82.816 1.874 20.527-1.078 35.015-5.795 55.355-6.573 23.227-.916 46.474-1.128 69.704-1.904 15.959-1.162 32.326-1.727 47.521-7.189 10.835-3.92 21.716-12.35 22.416-24.694.41-7.343-2.31-14.491-3.88-21.587Z" />
            <path d="M340.9 74.565c-.141-.057-.284-.11-.426-.166.207.098.464.21.728.312-.095-.046-.187-.088-.282-.136Zm60.802 234.528c-3.45-13.535-2.86-21.742-4.65-38.04-.7-7.983-2.334-15.89-6.05-23.052-4.433-8.66-12.602-14.666-20.68-19.716-15.88-10.323-35.107-4.773-52.647-3.545-27.072 1.951-54.287 1.376-81.338 3.798-14.059.931-42.08 5.804-49.024 6.68-29.248 3.55-58.623 6.112-87.84 9.92-1.573.25-3.138.55-4.7.86 1.902.026 3.805.055 5.705.162 27.914 1.729 55.885 3.449 83.867 2.863 17.342-.563 34.533-3.133 51.857-3.986 25.61-1.516 51.27-1.78 76.889-3.01 12.626-.868 35.771-4.152 40.563-2.5a36.768 36.768 0 0 1 4.092 1.364c-.605-.289-.793-.45.426.167.296.12.599.221.892.348a6.312 6.312 0 0 1-.59-.202c.402.196.781.366 1.099.498q1.845.874 3.62 1.887c7.032 4.486 5.405 3.043 11.468 9.037.514.64.752.926.809.98.176.243.357.483.516.737a40.438 40.438 0 0 1 2.81 5.196c3.575 9.787 3.156 13.439 3.75 16.103 1.456 11.588 1.673 23.349 4.55 34.727 4.66 19.217 7.72 21.514.827 28.678-17.087 14.144-63.621 12.703-100.388 13.449-12.097.344-24.225.176-36.287 1.297-17.325 2.064-34.634 4.443-52.108 4.784-22.552.626-45.09-.911-67.597-2.143-9.092-.328-20.815-3.506-24.748-7.55-6.624-6.613-8.441-11.341-11.677-23.268-5.02-17.418-8.9-40.567-11.518-55.645a77.891 77.891 0 0 1-.81-13.77c.106-2.467.116-5.139 1.64-7.212 1.066-1.455 2.804-1.927 4.474-2.325 3.448-.868 6.949-1.513 10.428-2.24-6.333.802-15.691-1.577-18.795 5.56-2.695 7.326-2.493 15.42-2.146 23.118.567 8.577 1.175 17.155 2.132 25.698a277.37 277.37 0 0 0 7.74 42.149c6.716 18.627 20.47 26.347 39.507 28.218 27.533 1.837 55.239 3.977 82.815 1.874 20.528-1.078 35.016-5.795 55.355-6.574 23.228-.915 46.474-1.127 69.705-1.903 15.958-1.162 32.325-1.727 47.52-7.19 10.836-3.919 21.717-12.35 22.417-24.694.41-7.342-2.31-14.49-3.88-21.587Z" />
            <path d="M358.172 241.058c-.141-.057-.284-.111-.426-.167.207.1.464.21.727.313-.094-.046-.186-.088-.282-.137ZM315.226 15.642c-20.01-.762-40.036-1.115-60.047-.18-33.005.362-65.79 4.361-98.738 5.782-30.303 1.654-60.602 3.348-90.926 4.564C43.565 26.961 21.767 29.893 0 32.837c19.71.633 39.433.826 59.128 1.877 25.28 1.632 50.579 3.046 75.924 2.519 33.443-.214 66.716-3.786 100.059-5.955 46.734-3.774 93.428-7.931 140.037-13.044-19.927-1.724-39.933-2.183-59.922-2.592Z" />
          </svg>
          <h3 className="text-2xl tracking-wide">
            <span className="text-3xl font-semibold">404</span> Not Found
          </h3>
          <Link
            to="/"
            className="flex items-center px-6 py-2 space-x-3 text-gray-300 rounded-lg bg-cyan-900"
          >
            <TiArrowBackOutline className="w-7 h-7" /> <span>Back to Home</span>
          </Link>
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default NotFoundPage;
