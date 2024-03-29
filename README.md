# PatternMatcher

You have been provided a file with a list of strings. Each string is on a new line.
The size of the file could be anywhere between 5MB - 1000MB.

Write a program/script to count and print lines which have the following pattern

Any 4 char sequence which has a pair of two different characters followed by the reverse of that pair
e.g xaax or raar. The string is not considered valid if the pattern above exist in square brackets.

For example:

rttr[mnop]qrst this is valid (rttr outside square brackets).
efgh[baab]ommo this is invalid (baab is within brackets, ommo outside brackets).
bbbb[qwer]ereq this is invalid (bbbb is invalid, since the middle two characters should be different.
irttrj[asdfgh]zxcvbn this is valid (rttr is outside square brackets).

# Sample Input (Please store this in a file)

xdsqxnovprgovwzkus[fmadbfsbqwzzrzrgdg]aeqornszgvbizdm
itgslvpxoqqakli[arktzcssgkxktejbno]wsgkbwwtbmfnddt[zblrboqsvezcgfmfvcz]iwyhyatqetsreeyhh
pyxuijrepsmyiacl[rskpebsqdfctoqg]hbwageeiufvcmuk[wfvdhxyzmfgmcphpfnc]aotmbcnntmdltjxuusn
mfhczaevladdsqawgp[rwabwdnwiytloldf]varesbnjnsdbsmhmsi[tyjtbpzrbfzbwlga]sznkksuymkbyxlykfqg[fyislgfghcbltaft]knrkzaldhauordwfl
piftqfdhtumcmjmsge[qrsntvxhtfurcgcynx]oyswvuklvtmivlhen[syqhqtijyiduoxb]pdtdrhijqqzvcnl[xivmeqcwyafxvnok]jvlbkrwbgcgzaqms
pfqiqyscrxhvtrjzt[unmovhoommbcckocp]ziwuhtfghcqhzeysdw[zmhlfonldrgkbimft]nnlbctvfpbcoqzw[zivyewjzuuvvasybded]mznpvozhzsvkdedqu
adncdhtushtvtfcbez[rvaycmplefdvbrchc]vtviiplkpfhsyhwzz[pdpnsseaizogzvtkcq]piorguaivfpummlo
cdgyiakhcpbibtdwm[dqmibwtfswjlfxvwe]jghsohdnnowueerunt[stsuvrwswspkgom]mmyifoverwkyjqfofhd
luqpeubugunvgzdqk[jfnihalscclrffkxqz]wvzpvmpfiehevybbgpg[esjuempbtmfmwwmqa]rhflhjrqjbbsadjnyc
yqdhleetfcqhdiib[eceprgdrrsmbarxdtbq]hdayiijoaaeumfwcdj
cqqvoxzdokmgiwgcks[jqzwdkyjpbdchlt]phkfcoalnhoxnczrru
uxpvoytxfazjjhi[qogwhtzmwxvjwxreuz]zduoybbzxigwggwu[lamifchqqwbphhsqnf]qrjdjwtnhsjqftnqsk[bsqinwypsnnvougrs]wfmhtjkysqffllakru
jfuokpqkhmnvixa[fxfcqxfxbmhazuspg]eqfpfndvqnxluairk
rvvyvofaygynnetjtry[kegzdkleyezldyeyn]erioueyndgksxetku[tsarhnyrbaubgmteiw]lbcsksdiqqdacutvc

# To Run

Install node modules using 
### npm i
Run the program 
### node patternMatcher.js
