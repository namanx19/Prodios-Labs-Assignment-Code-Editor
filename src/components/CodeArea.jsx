import React, { useState, useEffect, useRef } from "react";
import { Highlight, themes } from "prism-react-renderer";

const CodeArea = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("jsx");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const textareaRef = useRef(null);

  const languages = [
    { label: "JavaScript (JSX)", value: "jsx" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C++", value: "cpp" },
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
  ];

  useEffect(() => {
    setTextareaHeight("auto");
    if (textareaRef.current) {
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }, [code]);

  return (
    <div className="container mx-auto py-8 px-12">
      <div className="mb-4">
        <label htmlFor="language-select" className="mr-2">
          Select Language:
        </label>
        <div className="rounded-sm bg-gray-200 text-black px-4 py-2 inline-block">
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-200"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="relative">
        <textarea
          ref={textareaRef}
          className="absolute top-0 left-0 w-full h-full bg-transparent text-transparent caret-black"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            fontFamily: "monospace",
            fontSize: "16px",
            outline: "none",
            padding: "16px",
            resize: "none",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            height: textareaHeight,
            overflow: "hidden",
            zIndex: 1,
          }}
        />
        <div
          className="w-full bg-gray-100 rounded-md"
          style={{
            fontFamily: "monospace",
            fontSize: "16px",
            padding: "16px",
            height: textareaHeight,
            whiteSpace: "pre-wrap", // Ensure the code wraps correctly
            boxSizing: "border-box",
            position: "relative",
            zIndex: 0, // Ensure the highlighted code is below the textarea
          }}
        >
          <Highlight code={code} language={language} theme={themes.github}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`${className} w-full`}
                style={{
                  ...style,
                  margin: 0,
                  backgroundColor: "transparent",
                }}
              >
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })} key={i}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} key={key} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default CodeArea;

// import React, { useState, useEffect, useRef } from "react";
// import { Highlight, themes } from "prism-react-renderer";

// const CodeArea = () => {
//   const [code, setCode] = useState("");
//   const [textareaHeight, setTextareaHeight] = useState("auto");
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     setTextareaHeight("auto");
//     if (textareaRef.current) {
//       setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
//     }
//   }, [code]);

//     return (
//       <>
//         <div className="container mx-auto py-8 px-12">
//           <button className="rounded-md bg-blue-500 text-white px-4 py-2">
//             Select Language:{" "}
//           </button>
//           <div className="relative">
//             <textarea
//               ref={textareaRef}
//               className="absolute top-0 left-0 w-full h-full bg-transparent text-transparent caret-black"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               style={{
//                 fontFamily: "monospace",
//                 fontSize: "16px",
//                 outline: "none",
//                 padding: "16px",
//                 resize: "none",
//                 border: "1px solid #ccc",
//                 boxSizing: "border-box",
//                 height: textareaHeight,
//                 overflow: "hidden",
//                 zIndex: 1, // Make sure the textarea is on top for input
//               }}
//             />
//             <div
//               className="w-full bg-gray-100 rounded-md"
//               style={{
//                 fontFamily: "monospace",
//                 fontSize: "16px",
//                 padding: "16px",
//                 height: textareaHeight,
//                 whiteSpace: "pre-wrap", // Ensure the code wraps correctly
//                 boxSizing: "border-box",
//                 position: "relative",
//                 zIndex: 0, // Ensure the highlighted code is below the textarea
//               }}
//             >
//               <Highlight code={code} language="jsx" theme={themes.github}>
//                 {({
//                   className,
//                   style,
//                   tokens,
//                   getLineProps,
//                   getTokenProps,
//                 }) => (
//                   <pre
//                     className={`${className} w-full`}
//                     style={{
//                       ...style,
//                       margin: 0,
//                       backgroundColor: "transparent",
//                     }}
//                   >
//                     {tokens.map((line, i) => (
//                       <div {...getLineProps({ line, key: i })} key={i}>
//                         {line.map((token, key) => (
//                           <span {...getTokenProps({ token, key })} key={key} />
//                         ))}
//                       </div>
//                     ))}
//                   </pre>
//                 )}
//               </Highlight>
//             </div>
//           </div>
//         </div>
//       </>
//     );
// };

// export default CodeArea;
