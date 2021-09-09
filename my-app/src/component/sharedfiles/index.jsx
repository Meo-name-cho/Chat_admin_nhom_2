import React, { useState } from 'react'
import './index.scss'

import bacgr from '../images/logo192.png'

import * as IconName from "react-icons/gr";
import { BsImage } from "react-icons/bs";
import { GoFileDirectory, GoFileSymlinkDirectory } from "react-icons/go";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";
import { MdVideoLibrary } from "react-icons/md";
import { RiFileCopyFill } from "react-icons/ri";
import barg from '../images/logo192.png'

function BoxChat() {
    const [Info, setInfo] = useState([
        { name: "Real estate deals", name1: "10 members", img: barg }

    ])
    return (
        <div className="sharedFiles">
            <ul>
                <li>
                    <div className="sharedFiles__header">
                        <a href="/" className="sharedFiles__header--icon1"><IconName.GrFormNext /></a>
                        <h3>shared files</h3>
                    </div>
                </li>
                <li>
                    <div className="sharedFiles__info">
                        <img src={Info[0].img} alt="" className="sharedFiles__info--img" />
                        <h3>{Info[0].name}</h3>
                        <h5> {Info[0].name1}</h5>
                    </div>
                </li>

                <li>
                    <div className="sharedFiles__Files">
                        <div href="/" className="sharedFiles__Files--files">
                            < GoFileDirectory className="sharedFiles__Files--icon" />
                            <div className="sharedFiles__Files--para">
                                <h4>All Files</h4>
                                <h2>231</h2>
                            </div>
                        </div>
                        <div href="/" className="sharedFiles__Files--Links">
                            < GoFileSymlinkDirectory className="sharedFiles__Files--icon1" />
                            <div className="sharedFiles__Files--para">

                                <h4>All Liles</h4>
                                <h2>231</h2>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="sharedFiles__type">
                        <span>File type</span>
                        <FaEllipsisV className="sharedFiles__type--icon" />
                    </div>
                </li>
                <li>
                    <div className="sharedFiles__DPMO" href="/">
                        <div className="sharedFiles__DPMO--icon">
                            <AiFillFile className="sharedFiles__DPMO--font" />
                        </div>
                        <div className="sharedFiles__DPMO--para">
                            <h5>Documents</h5>
                            <h6>126 files, 193MB</h6>
                        </div>
                        <GrFormNext className="sharedFiles__DPMO--next" />
                    </div>
                </li>
                <li>
                    <div className="sharedFiles__DPMO" href="/">
                        <div className="sharedFiles__DPMO--icon2">
                            <BsImage className="sharedFiles__DPMO--font2" />
                        </div>
                        <div className="sharedFiles__DPMO--para">
                            <h5>Documents</h5>
                            <h6>126 files, 193MB</h6>
                        </div>
                        <GrFormNext className="sharedFiles__DPMO--next" />
                    </div>
                </li>
                <li>
                    <div className="sharedFiles__DPMO" href="/">
                        <div className="sharedFiles__DPMO--icon3">
                            <MdVideoLibrary className="sharedFiles__DPMO--font3" />
                        </div>
                        <div className="sharedFiles__DPMO--para">
                            <h5>Documents</h5>
                            <h6>126 files, 193MB</h6>
                        </div>
                        <GrFormNext className="sharedFiles__DPMO--next" />
                    </div>
                </li>
                <li>
                    <div className="sharedFiles__DPMO" href="/">
                        <div className="sharedFiles__DPMO--icon4">
                            <RiFileCopyFill className="sharedFiles__DPMO--font4" />
                        </div>
                        <div className="sharedFiles__DPMO--para">
                            <h5>Documents</h5>
                            <h6>126 files, 193MB</h6>
                        </div>
                        <GrFormNext className="sharedFiles__DPMO--next" />
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default BoxChat
