import React, { useState, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { gaya } from "../../style/style";

export const Download = () => {
  const [download, setDownload] = useState("");
  const { random } = useContext(DataContext);
  const disable = random.length < 1 ? true : false;

  const downloadFile = async () => {
    const fileName = download;
    const json = JSON.stringify(random);
    const blob = new Blob([json], { type: "application/json" });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
        type="button"
        className="btn  btn-block"
        style={{
          backgroundColor: gaya.darklate,
          color: gaya.white,
          fontFamily: "arial",
          fontWeight: "bold"
        }}
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        disabled={disable}
      >
        Download
      </button>

      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Download
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Nama File:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={e => setDownload(e.target.value)}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-block upload"
                onClick={downloadFile}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
