import "./App.css";
import Unity, { UnityContext } from "react-unity-webgl";
import React, { useState, useEffect } from "react";

const unityContext = new UnityContext({
  loaderUrl: "Build/JSUnityTest.loader.js",
  dataUrl: "Build/JSUnityTest.data.unityweb",
  frameworkUrl: "Build/JSUnityTest.framework.js.unityweb",
  codeUrl: "Build/JSUnityTest.wasm.unityweb",
});

const ExpandCubeScaleButton: React.FC = () => (
  <button
    type="button"
    onClick={(): void => {
      unityContext.send("Cube", "ExpandScale", 1.5);
    }}
  >
    EXPAND
  </button>
);

const ShrinkCubeScaleButton: React.FC = () => (
  <button
    type="button"
    onClick={(): void => {
      unityContext.send("Cube", "ExpandScale", 0.5);
    }}
  >
    SHRINK
  </button>
);

function SetTextComponent() {
  const [unity_text, setUnityText] = useState("");

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnityText(e.target.value);
    unityContext.send("SYSTEM", "SetText", e.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Text: 
          <input name="unity_text" value={unity_text} onChange={onChangeText} />
        </label>
      </form>
    </div>
  );
}

function App() {
  const [progression, setProgression] = useState(0);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  return (
    <div>
      <h1>JSUnityTest</h1>
      <p>Loading {progression * 100} percent...</p>
      <p>top</p>

      <ShrinkCubeScaleButton />
      <ExpandCubeScaleButton />

      <SetTextComponent />

      <Unity
        unityContext={unityContext}
        style={{ width: "100%", height: "80%" }}
      />
      <p>bottom</p>
    </div>
  );
}

export default App;
