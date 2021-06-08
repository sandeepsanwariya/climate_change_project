import React from 'react'
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router';
function Countries() {
    let history =useHistory()
    return (

        <div>
    <select id="country" name="country" onChange={(e) =>{
        
        const fname=e.target.value;
        history.push("/climate-change-"+fname)
    }} >
 <option value="American-Samoa">American-Samoa</option>
<option value="United-States-Minor-Outlying-Islands">United-States-Minor-Outlying-Islands</option>
<option value="Cook-Islands">Cook-Islands</option>
<option value="French-Polynesia">French-Polynesia</option>
<option value="Niue">Niue</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Samoa">Samoa</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Wallis-and-Futuna">Wallis-and-Futuna</option>
<option value="El-Salvador">El-Salvador</option>
<option value="Guatemala">Guatemala</option>
<option value="Mexico">Mexico</option>
<option value="Canada">Canada</option>
<option value="Argentina">Argentina</option>
<option value="Falkland-Islands">Falkland-Islands</option>
<option value="Chile">Chile</option>
<option value="Ecuador">Ecuador</option>
<option value="Peru">Peru</option>
<option value="Bolivia">Bolivia</option>
<option value="Brazil">Brazil</option>
<option value="Paraguay">Paraguay</option>
<option value="Uruguay">Uruguay</option>
<option value="South-Georgia-and-South-Sandwich-Islands">South-Georgia-and-South-Sandwich-Islands</option>
<option value="Antarctica">Antarctica</option>
<option value="Fiji">Fiji</option>
<option value="Saint-Helena">Saint-Helena</option>
<option value="Anguilla">Anguilla</option>
<option value="Antigua-and-Barbuda">Antigua-and-Barbuda</option>
<option value="Aruba">Aruba</option>
<option value="Bahamas">Bahamas</option>
<option value="Barbados">Barbados</option>
<option value="Belize">Belize</option>
<option value="Bermuda">Bermuda</option>
<option value="Bonaire">Bonaire</option>
<option value="British-Virgin-Islands">British-Virgin-Islands</option>
<option value="Cayman-Islands">Cayman-Islands</option>
<option value="Colombia">Colombia</option>
<option value="Costa-Rica">Costa-Rica</option>
<option value="Cuba">Cuba</option>
<option value="Curacao">Curacao</option>
<option value="Dominica">Dominica</option>
<option value="Dominican-Republic">Dominican-Republic</option>
<option value="French-Guiana">French-Guiana</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Jamaica">Jamaica</option>
<option value="Martinique">Martinique</option>
<option value="Montserrat">Montserrat</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Panama">Panama</option>
<option value="Puerto-Rico">Puerto-Rico</option>
<option value="Saba">Saba</option>
<option value="Saint-Barthelemy">Saint-Barthelemy</option>
<option value="Saint-Eustatius">Saint-Eustatius</option>
<option value="Saint-Kitts-and-Nevis">Saint-Kitts-and-Nevis</option>
<option value="Saint-Lucia">Saint-Lucia</option>
<option value="Saint-Martin">Saint-Martin</option>
<option value="Saint-Pierre-and-Miquelon">Saint-Pierre-and-Miquelon</option>
<option value="Saint-Vincent-and-the-Grenadines">Saint-Vincent-and-the-Grenadines</option>
<option value="Sint-Maarten">Sint-Maarten</option>
<option value="Suriname">Suriname</option>
<option value="Trinidad-and-Tobago">Trinidad-and-Tobago</option>
<option value="Turks-and-Caicos-Islands">Turks-and-Caicos-Islands</option>
<option value="US-Virgin-Islands">US-Virgin-Islands</option>
<option value="Venezuela">Venezuela</option>
<option value="Burkina-Faso">Burkina-Faso</option>
<option value="Cabo-Verde">Cabo-Verde</option>
<option value="Côte-d'Ivoire">Côte-d'Ivoire</option>
<option value="Gambia">Gambia</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Liberia">Liberia</option>
<option value="Mali">Mali</option>
<option value="Mauritania">Mauritania</option>
<option value="Morocco">Morocco</option>
<option value="Portugal">Portugal</option>
<option value="Senegal">Senegal</option>
<option value="Sierra-Leone">Sierra-Leone</option>
<option value="Greenland">Greenland</option>
<option value="Guernsey">Guernsey</option>
<option value="Ireland">Ireland</option>
<option value="Isle-of-Man">Isle-of-Man</option>
<option value="Jersey">Jersey</option>
<option value="United-Kingdom">United-Kingdom</option>
<option value="Iceland">Iceland</option>
<option value="Faroe-Islands">Faroe-Islands</option>
<option value="Svalbard">Svalbard</option>
<option value="Bouvet-Island">Bouvet-Island</option>
<option value="New-Zealand">New-Zealand</option>
<option value="Angola">Angola</option>
<option value="Botswana">Botswana</option>
<option value="Burundi">Burundi</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo-DRC">Congo-DRC</option>
<option value="Gabon">Gabon</option>
<option value="Kenya">Kenya</option>
<option value="Lesotho">Lesotho</option>
<option value="Malawi">Malawi</option>
<option value="Juan-De-Nova-Island">Juan-De-Nova-Island</option>
<option value="Mozambique">Mozambique</option>
<option value="Namibia">Namibia</option>
<option value="Rwanda">Rwanda</option>
<option value="Sao-Tome-and-Principe">Sao-Tome-and-Principe</option>
<option value="South-Africa">South-Africa</option>
<option value="Eswatini">Eswatini</option>
<option value="Tanzania">Tanzania</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
<option value="British-Indian-Ocean-Territory">British-Indian-Ocean-Territory</option>
<option value="French-Southern-Territories">French-Southern-Territories</option>
<option value="Heard-Island-and-McDonald-Islands">Heard-Island-and-McDonald-Islands</option>
<option value="Madagascar">Madagascar</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Glorioso-Islands">Glorioso-Islands</option>
<option value="Réunion">Réunion</option>
<option value="Seychelles">Seychelles</option>
<option value="Algeria">Algeria</option>
<option value="Benin">Benin</option>
<option value="Cameroon">Cameroon</option>
<option value="Central-African-Republic">Central-African-Republic</option>
<option value="Chad">Chad</option>
<option value="Equatorial-Guinea">Equatorial-Guinea</option>
<option value="Kiribati">Kiribati</option>
<option value="Libya">Libya</option>
<option value="Malta">Malta</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Togo">Togo</option>
<option value="Tunisia">Tunisia</option>
<option value="Cyprus">Cyprus</option>
<option value="Djibouti">Djibouti</option>
<option value="Egypt">Egypt</option>
<option value="Eritrea">Eritrea</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Greece">Greece</option>
<option value="Iraq">Iraq</option>
<option value="Israel">Israel</option>
<option value="Jordan">Jordan</option>
<option value="Lebanon">Lebanon</option>
<option value="Palestinian-Territory">Palestinian-Territory</option>
<option value="South-Sudan">South-Sudan</option>
<option value="Sudan">Sudan</option>
<option value="Syria">Syria</option>
<option value="Turkey">Turkey</option>
<option value="Uganda">Uganda</option>
<option value="Andorra">Andorra</option>
<option value="United-States">United-States</option>
<option value="France">France</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Monaco">Monaco</option>
<option value="Switzerland">Switzerland</option>
<option value="Belgium">Belgium</option>
<option value="Germany">Germany</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Netherlands">Netherlands</option>
<option value="Albania">Albania</option>
<option value="Austria">Austria</option>
<option value="Bosnia-and-Herzegovina">Bosnia-and-Herzegovina</option>
<option value="Croatia">Croatia</option>
<option value="Czech-Republic">Czech-Republic</option>
<option value="Denmark">Denmark</option>
<option value="Hungary">Hungary</option>
<option value="Italy">Italy</option>
<option value="Montenegro">Montenegro</option>
<option value="Poland">Poland</option>
<option value="San-Marino">San-Marino</option>
<option value="Serbia">Serbia</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="North-Macedonia">North-Macedonia</option>
<option value="Vatican-City">Vatican-City</option>
<option value="Norway">Norway</option>
<option value="Sweden">Sweden</option>
<option value="Belarus">Belarus</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Estonia">Estonia</option>
<option value="Finland">Finland</option>
<option value="Georgia">Georgia</option>
<option value="Latvia">Latvia</option>
<option value="Lithuania">Lithuania</option>
<option value="Moldova">Moldova</option>
<option value="Romania">Romania</option>
<option value="Ukraine">Ukraine</option>
<option value="Afghanistan">Afghanistan</option>
<option value="Bahrain">Bahrain</option>
<option value="India">India</option>
<option value="Iran">Iran</option>
<option value="Kuwait">Kuwait</option>
<option value="Maldives">Maldives</option>
<option value="Nepal">Nepal</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Qatar">Qatar</option>
<option value="Saudi-Arabia">Saudi-Arabia</option>
<option value="Somalia">Somalia</option>
<option value="Sri-Lanka">Sri-Lanka</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="United-Arab-Emirates">United-Arab-Emirates</option>
<option value="Yemen">Yemen</option>
<option value="Armenia">Armenia</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Christmas-Island">Christmas-Island</option>
<option value="Cocos-Islands">Cocos-Islands</option>
<option value="Indonesia">Indonesia</option>
<option value="Timor-Leste">Timor-Leste</option>
<option value="Australia">Australia</option>
<option value="Nauru">Nauru</option>
<option value="New-Caledonia">New-Caledonia</option>
<option value="Norfolk-Island">Norfolk-Island</option>
<option value="Papua-New-Guinea">Papua-New-Guinea</option>
<option value="Solomon-Islands">Solomon-Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Cambodia">Cambodia</option>
<option value="Laos">Laos</option>
<option value="Malaysia">Malaysia</option>
<option value="Myanmar">Myanmar</option>
<option value="Singapore">Singapore</option>
<option value="Thailand">Thailand</option>
<option value="Vietnam">Vietnam</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Bhutan">Bhutan</option>
<option value="China">China</option>
<option value="Brunei-Darussalam">Brunei-Darussalam</option>
<option value="Philippines">Philippines</option>
<option value="South-Korea">South-Korea</option>
<option value="Mongolia">Mongolia</option>
<option value="North-Korea">North-Korea</option>
<option value="Guam">Guam</option>
<option value="Japan">Japan</option>
<option value="Marshall-Islands">Marshall-Islands</option>
<option value="Micronesia">Micronesia</option>
<option value="Northern-Mariana-Islands">Northern-Mariana-Islands</option>
<option value="Palau">Palau</option>
<option value="Russian-Federation">Russian-Federation</option>
<option value="Spain">Spain</option>
<option value="Canarias">Canarias</option>
</select>
        </div>
    )
}

export default Countries
