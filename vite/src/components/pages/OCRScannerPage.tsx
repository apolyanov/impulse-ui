import { Container } from "@impulse-ui/layout";
import { OCRScanner } from "@impulse-ui/ocr";
import { Typography } from "@impulse-ui/text";
import { useCallback, useState } from "react";
import { RecognizeResult } from "tesseract.js";

const OCRScannerPage = () => {
  const [result, setResult] = useState<RecognizeResult>();

  const onSuccess = useCallback((result: RecognizeResult) => {
    setResult(result);
  }, []);

  return (
    <Container
      iStyle={{
        iCss: {
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 4,
        },
      }}
    >
      <OCRScanner scanningInterval={50} onSuccess={onSuccess} />
      <Typography as="pre">{JSON.stringify(result?.data, null, 2)}</Typography>
    </Container>
  );
};

export default OCRScannerPage;
