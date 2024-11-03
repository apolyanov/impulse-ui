import { OCRScanner } from "@impulse-ui/ocr";
import { useCallback, useState } from "react";
import { RecognizeResult } from "tesseract.js";

const IsolatedPage = () => {
  const [result, setResult] = useState<RecognizeResult>();

  const onSuccess = useCallback((result: RecognizeResult) => {
    setResult(result);
  }, []);

  return (
    <div style={{ margin: 64 }}>
      <OCRScanner scanningInterval={50} onSuccess={onSuccess} />
    </div>
  );
};

export default IsolatedPage;
