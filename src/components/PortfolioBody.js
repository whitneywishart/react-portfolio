import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function PortfolioBody() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    console.log(
      '🚀 ~ file: PortfolioBody.js ~ line 10 ~ addBucketItem ~ item',
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new bucket list item to the existing array of objects
    const newBucket = [item, ...bucket];
    console.log(newBucket);

    // Call setBucket to update state with our new set of bucket list items
    setBucket(newBucket);
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedBucket = bucket.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedBucket);
    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    const updatedBucket = [...bucket].filter((item) => item.id !== id);

    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h2 className='left-rail'>About me</h2>
      <div>
        <p>
          Northwest native, full-stack web developer and digital content management generalist for high-visibility enterprise sites and digital marketing programs.
        </p>
        <p>
          <strong>Full stack web development</strong>  |  HTML, CSS, JavaScript, APIs/REST/JSON, MERN (MongoDB, Express.js, React.js, Node.js), MySQL, Heroku, Git
        </p>
        <p>
          <strong>Agile methodologies</strong>  |  Jira project administrator, including advanced JQL queries, enterprise level project and task setup and management (KEY level and execution level), status tracking and dynamically updating boards/wallboards
        </p>
        <p>
          <strong>Accessibility</strong>  |  Extensive knowledge of AA conformance requirements for web and PDF
        </p>
        <p>
          <strong>AEM</strong>  |  Authoring power user, including template creation, content and experience fragment use, bulk updating, query builder, bulk updater and native reporting
        </p>
        <p>
          <strong>Adobe Creative Suite proficiency</strong>  |  Acrobat Pro, PDF creation and accessibility optimization, native tools  |  Photoshop, advanced color correction, image editing, and optimization for web  |  Illustrator, advanced illustration editing  |  InDesign, advanced document editing including interactive PDF and branded styles creation  |  Premiere, proficient video editing  |  After Effects, proficient animation and effects editing  |  XD, specification editing and pixel-perfect build execution based on XD/Figma/Sketch</p>

        <p>
          <strong>Full MS Office Suite</strong>  |  Advanced user for all apps, including advanced Excel, for work with complex formulas, pivot charts and tables, power query, data modeling, UDF, and VBA scripting for task automation (e.g. building a fully styled PowerPoint deck based on multiple Excel charts with one click)
        </p>
        <p>
          <strong>PowerShell proficiency</strong>  |  Scripting for automated web scraping and efficient task execution
        </p>
        <p>
          <strong>Enterprise content management for web</strong>  |  Best practices, process author, documentation, consistently styled and branded web authoring for vast multi-language sites, and localization management
        </p>
        <p>
          <strong>UAT</strong>  |  Design and development collaboration to deliver above and beyond leadership expectations the first time, on time
        </p>
        <p>
          <strong>A/B testing</strong>  |  Building Optimizely tests and developing recommendations for increased demand generation
        </p>
        <p>
          <strong>Enterprise asset and DAM management</strong>
        </p>
        <p>
          <strong>Pixel-perfect attention to detail with efficiency always at the forefront</strong>
        </p>
        <p>
          <strong>Complete comfort with ambiguity, broad thinking self-sufficient troubleshooter</strong>
        </p>
      </div>
      <h2 className='left-rail'>Portfolio</h2>
      <h2 className='left-rail'>Contact</h2>
      <h2 className='left-rail'>Resume</h2>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </div>
  );
}

export default PortfolioBody;
