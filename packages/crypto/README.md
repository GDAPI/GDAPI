Encrypt/Decrypt Geometry Dash related data.

[Live Demo](https://stackblitz.com/edit/gdapi-crypto-demo?file=index.js)

# Install
First, install the package using NPM.
```npm install @gdapi/crypto```
Then import it into your code.
```javascript
// named import
import { decryptGameFile, encryptGameFile, decryptLevel, encryptLevel } from '@gdapi/crypto'
// namespaced import
import * as Crypto from '@gdapi/crypto'
```

# Docs
## `decryptGameFile(gameFile: Uint8Array): Promise<string>`
Decrypt game file(one of `CCGameManager.dat`, `CCGameManager2.dat`, `CCLocalLevels.dat`, `CCLocalLevels2.dat`) into a string.

### Example
`CCGameManager.dat`(binary)

```
C?xBJJJJJJJJH8\\S9TjFI_M};yM&>QhD|gNXgDd>~fae]jEM>YXJr?F_crOL~TTQ|ZIy<98abTRTxnT?gE2}H9M8he{ad~OTh_&IcDC}@xMiq_Ey8i}c{2[rCfo><]}EA>:~Xe^cqQF9F^:eZLE<O<\`]cbNQZAoOMeYSHa>@Nb&onbe:^_yq;haiEd{3EJ>CXzr9=^l_b8yq^a3EmYYXGTSfIS~|iOLs?DZ]i[Nr83S2LQ:<G_h}=sm\jSeQzo~}m]9@h]sq|jf&aM]a<}Ef>n8dese=}m398|F^^IFlF@FNyFSNR^;{XXAR;BBsJJ;aYF|`s<qe8}T@Foc~TqeJHq8b<yR}@T@y;=s?=8SnHrM3Ih:]>aSbyES<AmZ<Yh}yh]fs2]`@zhcd^i~S]zsxTIgRzSo[f|9yhNCM\z`;zq2]D3>DiF3D~y}ox=TmM=}sr<`gMIFBCQB?}]@C_A:n`^DBZ2qzx_Dr\88f2C@AeiIROQmF2Sz>SHCcnB|B;c_{HD`R=Z_{@oBq{MD`BhZJA|ZhNSIL|HNI{|ZhN8ID|NNIAr^?@SC\;`>=}f}FMgYr8|{fabajLd{;cCXFoBG;MLfHI>|cah3LD}BM[}NL?IzJsrZ?EZI~Z_OJN|[hJ{|\_c^3M9@]Shq<<3S&<A3mT?Dx=:DTbe`Rixd]\Dn3FCX?3xlnE\|&zef\z{iR3;[{S{megT3r3;\T<~mD}F9=@}q?SsqInnTJhC|orCTH3}AJjGHJJJ
```

Decrypted
```xml

<?xml version="1.0"?><plist version="1.0" gjver="2.0"><dict><k>valueKeeper</k><d><k>gv_0002</k><s>1</s><k>gv_0001</k><s>1</s><k>gv_0026</k><s>1</s><k>gv_0027</k><s>1</s><k>gv_0023</k><s>1</s><k>gv_0038</k><s>1</s><k>gv_0043</k><s>1</s><k>gv_0044</k><s>1</s><k>gv_0050</k><s>2</s><k>gv_0049</k><s>6</s><k>gv_0046</k><s>1</s><k>gv_0036</k><s>1</s><k>gv_0030</k><s>1</s><k>gv_0019</k><s>1</s><k>gv_0013</k><s>1</s><k>gv_0018</k><s>1</s></d><k>unlockValueKeeper</k><d /><k>customObjectDict</k><d /><k>bg…<k>GS_5</k><d /><k>GS_6</k><d /><k>GS_7</k><d /><k>GS_23</k><d /><k>GS_8</k><d /><k>GS_9</k><d /><k>GS_10</k><d /><k>GS_16</k><d /><k>GS_17</k><d /><k>GS_18</k><d /><k>GS_24</k><d /><k>GS_11</k><d /><k>GS_22</k><d /><k>GS_25</k><d /><k>GS_12</k><d /><k>GS_15</k><d /><k>GS_14</k><d /><k>GS_19</k><d /><k>GS_21</k><d /><k>MDLM_001</k><d /><k>KBM_001</k><d /><k>KBM_002</k><d /><k>showSongMarkers</k><t /><k>clickedEditor</k><t /><k>binaryVersion</k><i>35</i><k>resolution</k><i>-1</i></dict></plist>
```
__Note__ Decrypted data is a simplified version of plist(Property list). You can parse it using `@gdapi/plist` package.

## `encryptGameFile(data: string): Promise<Uint8Array>`
Encrypt data back to the `Uint8Array` which can be saved as game file.

## `decryptLevel(levelData: string): Promise<string>`
Decrypt level data into a string. Can decrypt data that has Gzip or Zlib format.

### Example
```
H4sIAAAAAAAAA6Vbu47lNgz9Ic_CektYpNgUKQMkA2yANC5Szi_k42OJlK0HKQpIsfcudKgXeUiT9J2vTxMPdWkbL31_pstc2rlLKfjS8AWD9vpQl7_UeZ5XuNSlXP6I13nFS_2r7m99_zP3P2G6YqerU--dIP2_E-grz6SWUNpdMGljGccucz6LbFzGL5fZuND_U4Ylph9fP5Q5lFL5P-4485eHL3vcn_644a8f4SgC-BWzwKdJRU6XT1M-C_DDlk9A1Qlf6ji_q3ufQ99LmMO6w92L5aHzDPfgh073sNbuMPeWh7uBo8w1DmaeWue5_hY4zDtdlyVNyMM6ukOf-T8KsPPMmCmYDWXK4fPe-crvZFXWVMPkBrvVWLCyZnj2y8e4h_Uw7DQMl5XuK-UPe6RBynpOyvvm2Nr1xz7HZU5hs3IBm7akzI6U2hEKWyvt7SedPVRFyVKKVXonJekUNL9zeMMrovArG-Yh0sA9a0heltVhnsQ0kOKZ1kkJl4bTSERCKcGweDOBJHiuHSHJYrChwFwQkg5ldpiLUlvKwuAi3BBjmyS1RQjeC-4AowurbqFb8TZH4hx9MF4GGx4887JgJsdlZ48PFZ4QPy_xsNq5RoEDqwGTOIZSgglASuIYSgnMwDPvCG3tJxEDpBbEKJr0gdQkYKox9KBlmCdpGaUELYOUpGU4jRStQEqKViglODyeSzAZSPF6VueoZvWmLZMJXqI3BzVC_AIpybtRakuBUixEBe5oZkt9ku2DwPjC15DaPKvncjDN5UmM5jlgrrduezTYVKI4SEkURylBYyC1JSTtZ3bYhaoT2IVKFHgDUlsbSt6JUoKno3mEOIUq3ZNiTQ05d3TAmPLUejz6SbsL40AGlTWwEbC5DAkP1hnsrsiIo-IirK_DQ7jbCs-ZH8LanMNKgsXwPrwtys1SIP0MsDaZp7FEaSTNiTutkRQmFq8EN3Sc2rJOFuzcerX17s7PejMUNrfq3HUShEL7TDxX1WlIs5UtcOaGJlFywzhVUrZ3PbffkJwT7aXkhiVRcoMceM4dJU2lxfo-smlVk22OxlNzUstsp-ZEcym5o2jVJvi0JIQwpeJ7B_UUE-qbtTmU3bNu0VZShcBE5m7nxcYpA0pjBvRqUy9SaRSncwycuaNrPSebS8kdXespTVsKbhBQzznkUnLHnfWcCa_XXAYTMIpJi-hl5mSM2dCkXaOYOc9YSm7o2kzZICc4p3FLyR1VG7NrPtPm2DuSG-QxUzLJCNoph1kK7uxt54xnKbmjI-t2LWTlPPDWTu7DKNf64lNdppQx78fYmSdqFoLI55Fx44CZRjLP4WgDUnyFRIq_0UjgkFJ8PQj6tm8d6JkQ3FNaDEuFV6UkUgoNEikGoxHthhHFrmKJO4SZjs-sGOZT4SMx1jhdn4bnN1cehtqP0-fTxMDdKQbuBlHNZmjnUFqNgbNEfLJbEiBoEGuBMIxQNIs1GR9HAmGAOL9iaMA5hR7BzuufDVPiCJUMc_WEud8oSag8Gc4YyXBKSW9eSyOE0vEWbhhQhEVT4piTEse2lDjmpDQzB7We5ky-AefS4Y2oMNO_GijBdMSdW-N3HTwOhbSeEswa94HF39c3KzyucW_XeDgF3K_xKJwv8ud7Xxb1eKGBPl3_GMKBmalVcvYIRAhfQYTwFUQIX6lId4JCvXqCNLxxbsZnSiLIUhJxlpKIt5SsKuIoWXGOkvVIHCWrPt9ArFWYNQyPKYSqUsoDyoVv41TKBOqpWEiAoIAKHAVU4Myp3jqCRIhIh0gXtGKzlntexKt4DpOIUFeX4zfqQiq8TrhvpL7Bgrc239dvkAe83FNd6TWOd5ltA85V5Qh2Te6XGgDybAacZ7N6Xzgt8I7tyAZhCs92PDLLdtAUG8AqzgVAxNkAWnEuACPOBnDE2QdAxefzAcW06R_wOEDRXr_VHYlozSKEe2nDsV4T-X6LUMFCc3UFIkSVUhF2HyLC6KcOH5ISvE5XrDXg_GLoNRCAvM8AzvuMTmuf0e8rlAXOZhgVZwkGOE9QvB_rYKhs1kER5--XMCYsz8c7GOKCfngHR3zWD1DGcIUlIpQ_Ga7kRIR6ihjH-aCZS8_uAESOXeeMZQ_cGEDe4oDzjEKcZRTgvMUQZy0GOG8xxOf9TWrunnvLQ1dE2zDcbEBuhQ0jlKksV31XhF2fIoutFep4FkL0_YkfiRAVICJEYLVMoV5nEHHVvu_4SISK7PZ9rzaS1M6_RWzA-beTLwMA5BkMK_MxGXA-JiNPWIYDzjMccZbhgPMMR9uwMRNxNubi_dmYjfvz91NvnqZaljbFEUi6qaTWrpakDwcc0QwAX3Wlg6kN-OrIHUe0F_pNWA27Wre-pQzs5d70_sOWjtuHadJ8N7YQBoRKaxzXKsI5lFs6rpmDCOVKjuvD4BzKZd3zPpKewt6GA4bHTadtgs_gzG7-SWkDzr9wHVd2ceIX7_yudommIdYf3LrLU3HWH4Fa0FzvTqn4JU8GB39DODW_nm-sNg37zWEzD9dXq-CQPtIOiaf2Y5emf_T68mtQ7cfZLaq059a1rLb8-3vRBc4HdC-0abzQM_FCz8ULPRtf2zxLPAnnM8FNQ_wU_XIS9B_srP8Wme2GS4WxjzFsFbgatcfZx00QauQg1NhBqNGDUOMHoUcAeOLPN_bPaJxlRxDaKkFoywShBxKEHkoQejAhrNkLOM_eMHbISNwI-jXC_QhXAHZHiKWu5X1p-MX6yuMV9ZyLAMKFNthiDpvNNuUPfCjvikKBH4UCPwoFfhQK_CgU2FEosKNQYEeuwO5w3rvi2E-icZa9UWjARKGBE4UGSBQaIFFogEShAQI4711x7MSROO9dcXxzT-Pz_oXcydHkBlCLYF8SN0tSQFwtF-dZeIM09nCGGyah4ZGEhkcSGipJaIgkoSGShIZI4hoiHc57WBp_cEHiBIOy4s2pZsWXqGjOQEdFRG2D9ovRJsb1ZmLgUhDIU7N4znGfVypFUp3cYdUihNdpZlznnI4CQGDGp5dOdSFmvLyM4o6TK0EWLH-1xYJ2BYYFmEnCg2YElbn1Wf5EMqA58A_Mkirj5mkrGHX8ef7zywT5Av38-vn51-evv_3x8_e_v_8H_vqStOI-AAA=
```

Decrypted:
```
kS38,1_248_2_249_3_255_11_255_12_255_13_255_4_-1_6_1000_7_1_15_1_18_0_8_1|1_0_2_0_3_0_11_255_12_255_13_255_4_-1_6_1001_7_1_15_1_18_0_8_1|1_0_2_102_3_255_11_255_12_255_13_255_4_-1_6_1009_7_1_15_1_18_0_8_1|1_0_2_0_3_0_11_255_12_255_13_255_4_-1_6_1002_5_1_7_1_15_1_18_0_8_1|1_125_2_255_3_0_11_255_12_255_13_255_4_-1_6_1005_5_1_7_1_15_1_18_0_8_1|1_0_2_255_3_255_11_255_12_255_13_255_4_-1_6_1006_5_1_7_1_15_1_18_0_8_1|1_0_2_0_3_0_11_255_12_255_13_255_4_-1_6_1_7_1_15_1_18_0_8_1|1_0_2_0_3_0_11_255_12_255_13_255_4_-1_6_1004_7_1_15_1_18_0_8_1|,kA13,111,kA15,0,kA16,0,kA14,,kA6,13,kA7,1,kA17,1,kA18,0,kS39,0,kA2,0,kA3,0,kA8,0,kA4,0,kA9,0,kA10,0,kA11,0;1,11,2,1,3,45,57,1;1,1007,2,-29,3,225,36,1,51,1,10,0,35,0;1,1022,2,165,3,345,57,1;1,211,2,375,3,285,20,3,21,1;1,200,2,335,3,247,57,1,6,45,13,1;1,211,2,315,3,315,20,3,21,1;1,211,2,315,3,255,20,3;
(...more)
```

__Note__ This function currently cannot decrypt official level data which can be found inside `levelData.plist`.

## `encryptLevel(level: string): Promise<string>`
Encrypt level data into encrypted string.