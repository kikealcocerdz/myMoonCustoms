import "../src/App.css";
import { instagramPath, tiktokPath } from "../src/const";

export function SocialButton() {
  return (
    <ul className="social">
      <li className="social-item">
        <a
          className="social-link"
          href="https://www.instagram.com/mymoon.custom/"
          target="blank"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <span
              href="https://www.instagram.com/mymoon.custom/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="..\media\instagram.png" alt="Instagram" />
            </span>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={instagramPath[0]}
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={instagramPath[1]}
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={instagramPath[2]}
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </li>
      <li className="social-item">
        <a
          className="social-link"
          href="https://www.tiktok.com/@mymoon.custom"
          target="blank"
        >
          <svg
            id="e2yAClLx0wI1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-20 -14 128 128"
            fill="none"
          >
          <span
              href="https://www.tiktok.com/@mymoon.custom"
              target="_blank"
              rel="noreferrer"
            >
              <img src="..\media\instagram.png" alt="Instagram" />
            </span>
            <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.978192,75.331037c6.714,0,12.19-5.341,12.44-11.997l.023-59.417h10.855c-.232-1.241-.349-2.5-.35-3.762h-14.826l-.025,59.419c-.247,6.654-5.726,11.993-12.438,11.993-2.015.001-4-.49-5.782-1.431c2.335,3.258,6.095,5.191,10.103,5.195m43.594-51.245v-3.302c-3.989.004-7.893-1.157-11.232-3.339c2.928,3.371,6.869,5.701,11.234,6.641"
                    fill="#00f2ea"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.340192,17.442037c-3.272-3.744-5.075-8.549-5.073-13.522h-3.972c1.039,5.554,4.308,10.441,9.045,13.522m-36.683,29.2c-6.88.008-12.455,5.583-12.463,12.463.004,4.632,2.576,8.88,6.679,11.032-1.533-2.114-2.358-4.657-2.358-7.268.007-6.88,5.582-12.457,12.463-12.465c1.284,0,2.515.212,3.677.577v-15.136c-1.218-.173-2.447-.262-3.677-.268-.216,0-.429.012-.643.016v11.626c-1.19-.378-2.43-.573-3.678-.577"
                    fill="#ff004f"
                  />
                  <path
                    d="M62.944192,59.105037v-30.13c6.009,4.322,13.226,6.642,20.627,6.633v-11.522c-4.364-.941-8.305-3.272-11.232-6.644-4.737-3.081-8.006-7.968-9.045-13.522h-10.854l-.023,59.417c-.249,6.654-5.726,11.995-12.44,11.995-4.007-.004-7.768-1.938-10.102-5.194-4.103-2.151-6.676-6.399-6.681-11.032.008-6.88,5.583-12.455,12.463-12.463c1.282,0,2.513.21,3.677.577v-11.626c-14.75.346-26.644,12.442-26.644,27.275c0,7.173,2.787,13.703,7.328,18.58c4.578,3.223,10.041,4.95,15.639,4.945c15.048,0,27.287-12.242,27.287-27.289"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />

          </svg>
        </a>
      </li>
    </ul>
  );
}
