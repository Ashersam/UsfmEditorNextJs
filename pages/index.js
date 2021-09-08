import React, { useState, useEffect } from 'react';
import { createBasicUsfmEditor, withChapterPaging, withChapterSelection, withToolbar } from "usfm-editor"
import { DemoToolbarSpecs } from '../components/DemoToolbarSpecs'

const loading = String.raw`
\id 1TI
\ide UTF-8
\toc3 2SA
\mt 1st Timothy
\s5
\c 1
\p
\v 1 TESTis the beginning of the gospel of Jesus Christ, the Son of God.
\p
\v 2 As it is written in Isaiah the prophet,
\q "Look, I am sending my messenger before your face,
\q the one who will prepare your way.
\q
\v 3 The voice of one calling out in the wilderness,
\q 'Make ready the way of the Lord;
\q make his paths straight.'"
\m
\s5
\p
\v 4 John came, baptizing in the wilderness and preaching a baptism of repentance for the forgiveness of sins.
\v 5 The whole country of Judea and all the people of Jerusalem went out to him. They were baptized by him in the Jordan River, confessing their sins.
\v 6 John wore a coat of camel's hair and a leather belt around his waist, and he ate locusts and wild honey.
\c 3
\p
\v 1 This is the beginning of the gospel of Jesus Christ, the Son of God.
\p
\v 2 As it is written in Isaiah the prophet,
\q "Look, I am sending my messenger before your face,
\q the one who will prepare your way.
\q
\v 3 The voice of one calling out in the wilderness,
\q 'Make ready the way of the Lord;
\q make his paths straight.'"
`.trimLeft()

function Home() {
  const CustomEditor = withToolbar(withChapterSelection(withChapterPaging(createBasicUsfmEditor())))

  const [sourceString, setSourceString] = useState(loading);

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          USFM Editor
        </p>
      </header>
      <CustomEditor
        usfmString={sourceString}
        toolbarSpecs={DemoToolbarSpecs}
        />
    </div>
  );
}

export default Home;
