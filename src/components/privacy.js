import React from "react";
import "../App.css";

export default function Privacy() {
    return (
        <div className="container text-white py-5 PP-Section">
            <h1 className="fs-3">Privacy Policy</h1>
            <p>Effective Date: <span style={{ fontWeight: "bold" }}>20/02/2025</span></p>
            <p>Avida2C ("Website," "I," "my," or "me") is committed to protecting your privacy. This Privacy Policy outlines how I collect, use, and safeguard your information when you visit this website.</p>
            <div>
                <h2 className="fs-5">Information Collected</h2>
                <div>
                    <h3 className="fs-6" style={{ fontWeight: "bold" }}> Personal Information</h3>
                    <p>I collect personal information only when voluntarily provided, such as through a contact form or email. This may include:</p>
                    <ul>
                        <li>
                            <p>
                                Name (if submitted in a form)
                            </p>
                        </li>
                        <li>
                            <p>
                                Email Address (for communication purposes)
                            </p>
                        </li>
                        <li>
                            <p>
                                Other details provided in inquiries
                            </p>
                        </li>
                    </ul>
                    <p>This information is not shared, sold, or distributed to third parties.</p>
                    <h3 className="fs-6" style={{ fontWeight: "bold" }}> Non-Personal Information</h3>
                    <p>This website does not use analytics tools or third-party tracking services. However, standard web hosting logs may collect limited non-personal data for security and operational purposes, such as:</p>
                    <ul>
                        <li>
                            <p>
                                IP Address
                            </p>
                        </li>
                        <li>
                            <p>
                                Browser and Device Type
                            </p>
                        </li>
                        <li>
                            <p>
                                Referral Source (How You Found the Website)
                            </p>
                        </li>
                    </ul>
                    <p>This data is used solely for website functionality and security monitoring.</p>
                </div>
            </div>
            <div>
                <h2 className="fs-5">Cookies and Tracking Technologies</h2>
                <p>This website does not use third-party analytics or tracking cookies. Essential cookies may be used to ensure proper website functionality. Users can disable cookies through their browser settings if desired.</p>
            </div>
            <div>
                <h2 className="fs-5">Third-Party Links</h2>
                <p>This website may contain links to external websites, such as GitHub, DeviantArt, or Pinterest. These third-party sites operate independently and have their own privacy policies. I am not responsible for their practices, content, or security. Visitors are encouraged to review the privacy policies of these external sites before engaging with them.</p>
            </div>
            <div>
                <h2 className="fs-5">Data Security</h2>
                <p>I take reasonable measures to protect your personal information from unauthorized access, alteration, or misuse. However, no website can guarantee absolute security. Visitors are advised to avoid submitting sensitive personal data.
                    If you have a security concern, please contact me at <span style={{ fontWeight: 'bold' }}>avida2c@gmail.com</span>.</p>
            </div>
            <div>
                <h2 className="fs-5">Policy Updates</h2>
                <p>This Privacy Policy may be updated periodically to reflect changes in legal requirements or website operations. The latest version will always be available on this page.</p>
                <p>
                    Last Updated: <span style={{ fontWeight: 'bold' }}>20/02/2025</span>              </p>
            </div>
            <div>
                <h2 className="fs-5">Contact Information</h2>
                <p>For any questions regarding this Privacy Policy or data protection practices, please contact:</p>
                <p>Email: <span style={{ fontWeight: 'bold' }}>avida2c@gmail.com</span></p>
            </div>
        </div>
    );
}
