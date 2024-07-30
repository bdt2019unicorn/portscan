import { Box, Button, Column, Columns, Rows, Text, TextInput } from "@canva/app-ui-kit";
import { useState } from "react";
import styles from "styles/components.css";
import { mockWebsiteReview } from "utils/mock_data";

export const App = () => {
  const [websiteUrl, setWebsiteUrl] = useState(''); 
  const [websiteReview, setWebsiteReview] = useState(''); 

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Box>
          <Text>
            Put your website URL here
          </Text>
          <TextInput onChange={(value)=>setWebsiteUrl(value)} value={websiteUrl} placeholder="Your Website Here" />
        </Box>
        <Box>
          <Columns spacing="2u">
            <Column>
              <Button variant="primary" onClick={()=>setWebsiteReview(mockWebsiteReview)} stretch>Analyse Website</Button>
            </Column>
            <Column>
              <Button variant="primary" onClick={() => setWebsiteReview('')} stretch>Clear</Button>
            </Column>
          </Columns>
        </Box>
        <Box>
          <Text>
              {websiteReview}
          </Text>
        </Box>
      </Rows>
    </div>
  );
};
