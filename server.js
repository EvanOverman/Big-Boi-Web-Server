const path = require('path');
const express = require('express');
app = express();

app.get('/', (req, res) => {
	res.redirect('/index.html');
	console.log('Got request for / ... ');
});


app.get('/.git/hooks/update.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/update.sample'));
	console.log('Got request for /.git/hooks/update.sample ... ');
});


app.get('/.git/hooks/pre-push.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/pre-push.sample'));
	console.log('Got request for /.git/hooks/pre-push.sample ... ');
});


app.get('/.git/hooks/pre-rebase.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/pre-rebase.sample'));
	console.log('Got request for /.git/hooks/pre-rebase.sample ... ');
});


app.get('/.git/hooks/pre-receive.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/pre-receive.sample'));
	console.log('Got request for /.git/hooks/pre-receive.sample ... ');
});


app.get('/.git/hooks/fsmonitor-watchman.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/fsmonitor-watchman.sample'));
	console.log('Got request for /.git/hooks/fsmonitor-watchman.sample ... ');
});


app.get('/.git/hooks/prepare-commit-msg.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/prepare-commit-msg.sample'));
	console.log('Got request for /.git/hooks/prepare-commit-msg.sample ... ');
});


app.get('/.git/hooks/pre-commit.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/pre-commit.sample'));
	console.log('Got request for /.git/hooks/pre-commit.sample ... ');
});


app.get('/.git/hooks/commit-msg.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/commit-msg.sample'));
	console.log('Got request for /.git/hooks/commit-msg.sample ... ');
});


app.get('/.git/hooks/pre-applypatch.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/pre-applypatch.sample'));
	console.log('Got request for /.git/hooks/pre-applypatch.sample ... ');
});


app.get('/.git/hooks/applypatch-msg.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/applypatch-msg.sample'));
	console.log('Got request for /.git/hooks/applypatch-msg.sample ... ');
});


app.get('/.git/hooks/post-update.sample', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/hooks/post-update.sample'));
	console.log('Got request for /.git/hooks/post-update.sample ... ');
});


app.get('/.git/objects/4f/877591aee7e6c64a8122d65152b9893047de37', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4f/877591aee7e6c64a8122d65152b9893047de37'));
	console.log('Got request for /.git/objects/4f/877591aee7e6c64a8122d65152b9893047de37 ... ');
});


app.get('/.git/objects/4f/91e5235f9a9a1f28c8470ced445f623635d426', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4f/91e5235f9a9a1f28c8470ced445f623635d426'));
	console.log('Got request for /.git/objects/4f/91e5235f9a9a1f28c8470ced445f623635d426 ... ');
});


app.get('/.git/objects/ab/c05517986c4b224b4cee0f0dc731b377442b66', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ab/c05517986c4b224b4cee0f0dc731b377442b66'));
	console.log('Got request for /.git/objects/ab/c05517986c4b224b4cee0f0dc731b377442b66 ... ');
});


app.get('/.git/objects/ab/32922abbcdfbf844ade9cf62d6c2d9b1f4a1fb', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ab/32922abbcdfbf844ade9cf62d6c2d9b1f4a1fb'));
	console.log('Got request for /.git/objects/ab/32922abbcdfbf844ade9cf62d6c2d9b1f4a1fb ... ');
});


app.get('/.git/objects/ab/ea744a1f24a4271543d73aa11ced7d604f3281', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ab/ea744a1f24a4271543d73aa11ced7d604f3281'));
	console.log('Got request for /.git/objects/ab/ea744a1f24a4271543d73aa11ced7d604f3281 ... ');
});


app.get('/.git/objects/ab/9a1f3e3f8926d3277c98c262db3327df2057cf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ab/9a1f3e3f8926d3277c98c262db3327df2057cf'));
	console.log('Got request for /.git/objects/ab/9a1f3e3f8926d3277c98c262db3327df2057cf ... ');
});


app.get('/.git/objects/ab/20c935880ae4572c2637ac0dc690afdb2a1b03', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ab/20c935880ae4572c2637ac0dc690afdb2a1b03'));
	console.log('Got request for /.git/objects/ab/20c935880ae4572c2637ac0dc690afdb2a1b03 ... ');
});


app.get('/.git/objects/e1/d788b61a124bcc5d56f7e249fa1253e8186544', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e1/d788b61a124bcc5d56f7e249fa1253e8186544'));
	console.log('Got request for /.git/objects/e1/d788b61a124bcc5d56f7e249fa1253e8186544 ... ');
});


app.get('/.git/objects/e1/d3a51f95bde03964431f75d65c14238a02dfbc', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e1/d3a51f95bde03964431f75d65c14238a02dfbc'));
	console.log('Got request for /.git/objects/e1/d3a51f95bde03964431f75d65c14238a02dfbc ... ');
});


app.get('/.git/objects/e1/f1dd495eaebeadbaf353474b1b458510a05fcc', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e1/f1dd495eaebeadbaf353474b1b458510a05fcc'));
	console.log('Got request for /.git/objects/e1/f1dd495eaebeadbaf353474b1b458510a05fcc ... ');
});


app.get('/.git/objects/e1/5312b32ea4d09b17c76311985f2f12a780e082', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e1/5312b32ea4d09b17c76311985f2f12a780e082'));
	console.log('Got request for /.git/objects/e1/5312b32ea4d09b17c76311985f2f12a780e082 ... ');
});


app.get('/.git/objects/e1/b054161674b8e0b6a8cd9e7edb9a482bce4518', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e1/b054161674b8e0b6a8cd9e7edb9a482bce4518'));
	console.log('Got request for /.git/objects/e1/b054161674b8e0b6a8cd9e7edb9a482bce4518 ... ');
});


app.get('/.git/objects/e1/85dfe9efd723fa58c990a5755fe0b2bbe13b7f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e1/85dfe9efd723fa58c990a5755fe0b2bbe13b7f'));
	console.log('Got request for /.git/objects/e1/85dfe9efd723fa58c990a5755fe0b2bbe13b7f ... ');
});


app.get('/.git/objects/e1/887efdaa94ff62128c41bc4fc2c70ea98ae5cb', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e1/887efdaa94ff62128c41bc4fc2c70ea98ae5cb'));
	console.log('Got request for /.git/objects/e1/887efdaa94ff62128c41bc4fc2c70ea98ae5cb ... ');
});


app.get('/.git/objects/34/aee8b234f3c37cf896e6deb7a071a1306c45e1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/34/aee8b234f3c37cf896e6deb7a071a1306c45e1'));
	console.log('Got request for /.git/objects/34/aee8b234f3c37cf896e6deb7a071a1306c45e1 ... ');
});


app.get('/.git/objects/34/ddcc55dbcf4bcf6a925f2619860bea8ca269a7', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/34/ddcc55dbcf4bcf6a925f2619860bea8ca269a7'));
	console.log('Got request for /.git/objects/34/ddcc55dbcf4bcf6a925f2619860bea8ca269a7 ... ');
});


app.get('/.git/objects/36/3866d8fbf09898e9259effe6581b1bc85c05c5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/36/3866d8fbf09898e9259effe6581b1bc85c05c5'));
	console.log('Got request for /.git/objects/36/3866d8fbf09898e9259effe6581b1bc85c05c5 ... ');
});


app.get('/.git/objects/36/93d8a98e742e64878dbd52da64ecec012879bf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/36/93d8a98e742e64878dbd52da64ecec012879bf'));
	console.log('Got request for /.git/objects/36/93d8a98e742e64878dbd52da64ecec012879bf ... ');
});


app.get('/.git/objects/85/327bc6afd3a06e3e1884faf87e3eacc1b43444', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/85/327bc6afd3a06e3e1884faf87e3eacc1b43444'));
	console.log('Got request for /.git/objects/85/327bc6afd3a06e3e1884faf87e3eacc1b43444 ... ');
});


app.get('/.git/objects/85/0a94fea2a3d72b612daed71c17d738a59292c6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/85/0a94fea2a3d72b612daed71c17d738a59292c6'));
	console.log('Got request for /.git/objects/85/0a94fea2a3d72b612daed71c17d738a59292c6 ... ');
});


app.get('/.git/objects/85/d3f14adfcfe4ab6c13034d370ce37505b8facb', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/85/d3f14adfcfe4ab6c13034d370ce37505b8facb'));
	console.log('Got request for /.git/objects/85/d3f14adfcfe4ab6c13034d370ce37505b8facb ... ');
});


app.get('/.git/objects/77/5b5a394f35feaf295f7ee4a7ca1467a285369c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/77/5b5a394f35feaf295f7ee4a7ca1467a285369c'));
	console.log('Got request for /.git/objects/77/5b5a394f35feaf295f7ee4a7ca1467a285369c ... ');
});


app.get('/.git/objects/77/ce6d057129fe49a2d55b02b7dab3632ec8d566', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/77/ce6d057129fe49a2d55b02b7dab3632ec8d566'));
	console.log('Got request for /.git/objects/77/ce6d057129fe49a2d55b02b7dab3632ec8d566 ... ');
});


app.get('/.git/objects/77/6fb53c70f5718e0eb0b9a6154a203b3bd2b0e1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/77/6fb53c70f5718e0eb0b9a6154a203b3bd2b0e1'));
	console.log('Got request for /.git/objects/77/6fb53c70f5718e0eb0b9a6154a203b3bd2b0e1 ... ');
});


app.get('/.git/objects/77/85f9b66420c8491e3ed49a7a565b39d5e8dc92', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/77/85f9b66420c8491e3ed49a7a565b39d5e8dc92'));
	console.log('Got request for /.git/objects/77/85f9b66420c8491e3ed49a7a565b39d5e8dc92 ... ');
});


app.get('/.git/objects/77/22d4e88d9b41228bfb1994a8911bac10c654d2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/77/22d4e88d9b41228bfb1994a8911bac10c654d2'));
	console.log('Got request for /.git/objects/77/22d4e88d9b41228bfb1994a8911bac10c654d2 ... ');
});


app.get('/.git/objects/77/24daf71fc345e64c982c81dcddc84a53aca174', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/77/24daf71fc345e64c982c81dcddc84a53aca174'));
	console.log('Got request for /.git/objects/77/24daf71fc345e64c982c81dcddc84a53aca174 ... ');
});


app.get('/.git/objects/77/0b4b05ea6c397a01bcf7dfad789fbaf32a283f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/77/0b4b05ea6c397a01bcf7dfad789fbaf32a283f'));
	console.log('Got request for /.git/objects/77/0b4b05ea6c397a01bcf7dfad789fbaf32a283f ... ');
});


app.get('/.git/objects/7e/1fff6c2de4be524b8efdccb638ef1d891dc2e4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7e/1fff6c2de4be524b8efdccb638ef1d891dc2e4'));
	console.log('Got request for /.git/objects/7e/1fff6c2de4be524b8efdccb638ef1d891dc2e4 ... ');
});


app.get('/.git/objects/63/c5092a51ad3efddbf205ce934506a7565c89c7', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/63/c5092a51ad3efddbf205ce934506a7565c89c7'));
	console.log('Got request for /.git/objects/63/c5092a51ad3efddbf205ce934506a7565c89c7 ... ');
});


app.get('/.git/objects/63/15f19264e4be96cb956cc9d1920806099c43dd', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/63/15f19264e4be96cb956cc9d1920806099c43dd'));
	console.log('Got request for /.git/objects/63/15f19264e4be96cb956cc9d1920806099c43dd ... ');
});


app.get('/.git/objects/e4/554334589e767ceb4ba18f47bcf00dca753847', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e4/554334589e767ceb4ba18f47bcf00dca753847'));
	console.log('Got request for /.git/objects/e4/554334589e767ceb4ba18f47bcf00dca753847 ... ');
});


app.get('/.git/objects/b2/44616c64371bacccac6d1df709ff875f786dcc', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b2/44616c64371bacccac6d1df709ff875f786dcc'));
	console.log('Got request for /.git/objects/b2/44616c64371bacccac6d1df709ff875f786dcc ... ');
});


app.get('/.git/objects/b2/3a09b8f23d0e59d16d2f1c120865e0b6eabed8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b2/3a09b8f23d0e59d16d2f1c120865e0b6eabed8'));
	console.log('Got request for /.git/objects/b2/3a09b8f23d0e59d16d2f1c120865e0b6eabed8 ... ');
});


app.get('/.git/objects/b2/9c83746ccd382dee434754688d194eed0caedd', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b2/9c83746ccd382dee434754688d194eed0caedd'));
	console.log('Got request for /.git/objects/b2/9c83746ccd382dee434754688d194eed0caedd ... ');
});


app.get('/.git/objects/b2/fbce2a00ca970a813659467a6c1a18554cd5ed', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b2/fbce2a00ca970a813659467a6c1a18554cd5ed'));
	console.log('Got request for /.git/objects/b2/fbce2a00ca970a813659467a6c1a18554cd5ed ... ');
});


app.get('/.git/objects/ef/bf024303c2e1bedc14fff7c9ff51db5521d333', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ef/bf024303c2e1bedc14fff7c9ff51db5521d333'));
	console.log('Got request for /.git/objects/ef/bf024303c2e1bedc14fff7c9ff51db5521d333 ... ');
});


app.get('/.git/objects/ef/fd70a1d602f79db0f5d560a28eb2a3dd4d4276', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ef/fd70a1d602f79db0f5d560a28eb2a3dd4d4276'));
	console.log('Got request for /.git/objects/ef/fd70a1d602f79db0f5d560a28eb2a3dd4d4276 ... ');
});


app.get('/.git/objects/ef/ad0ac8c672b9c0f35dbb406bf6ab0d4ee23a9f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ef/ad0ac8c672b9c0f35dbb406bf6ab0d4ee23a9f'));
	console.log('Got request for /.git/objects/ef/ad0ac8c672b9c0f35dbb406bf6ab0d4ee23a9f ... ');
});


app.get('/.git/objects/42/33247eedf665a775426451b159c48e3eeeef9a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/42/33247eedf665a775426451b159c48e3eeeef9a'));
	console.log('Got request for /.git/objects/42/33247eedf665a775426451b159c48e3eeeef9a ... ');
});


app.get('/.git/objects/42/695fb4101f8f2622041b4eaf2d654195393823', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/42/695fb4101f8f2622041b4eaf2d654195393823'));
	console.log('Got request for /.git/objects/42/695fb4101f8f2622041b4eaf2d654195393823 ... ');
});


app.get('/.git/objects/62/c79df64725655b7c8ee69ab6fda36d0a5eeee5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/62/c79df64725655b7c8ee69ab6fda36d0a5eeee5'));
	console.log('Got request for /.git/objects/62/c79df64725655b7c8ee69ab6fda36d0a5eeee5 ... ');
});


app.get('/.git/objects/b9/3a83e559e14f007190c2f15c6df911b2ad79cf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b9/3a83e559e14f007190c2f15c6df911b2ad79cf'));
	console.log('Got request for /.git/objects/b9/3a83e559e14f007190c2f15c6df911b2ad79cf ... ');
});


app.get('/.git/objects/b9/d068f6b70003c9f18334fb34b1a431abc33471', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b9/d068f6b70003c9f18334fb34b1a431abc33471'));
	console.log('Got request for /.git/objects/b9/d068f6b70003c9f18334fb34b1a431abc33471 ... ');
});


app.get('/.git/objects/b9/577036ca7ab1c131bcb382c662f1021d0ecff5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b9/577036ca7ab1c131bcb382c662f1021d0ecff5'));
	console.log('Got request for /.git/objects/b9/577036ca7ab1c131bcb382c662f1021d0ecff5 ... ');
});


app.get('/.git/objects/4b/08606e95179ce621df323f25b3fdc19a51d181', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4b/08606e95179ce621df323f25b3fdc19a51d181'));
	console.log('Got request for /.git/objects/4b/08606e95179ce621df323f25b3fdc19a51d181 ... ');
});


app.get('/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904'));
	console.log('Got request for /.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904 ... ');
});


app.get('/.git/objects/4b/ad3f335a23da248cf15b339dc40ed2d1c9f311', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4b/ad3f335a23da248cf15b339dc40ed2d1c9f311'));
	console.log('Got request for /.git/objects/4b/ad3f335a23da248cf15b339dc40ed2d1c9f311 ... ');
});


app.get('/.git/objects/25/58737bb16344853470fab1f6e4629c28abab5e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/25/58737bb16344853470fab1f6e4629c28abab5e'));
	console.log('Got request for /.git/objects/25/58737bb16344853470fab1f6e4629c28abab5e ... ');
});


app.get('/.git/objects/25/fe8b72b7fd6a1c46fa9ae3529bd566309257dc', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/25/fe8b72b7fd6a1c46fa9ae3529bd566309257dc'));
	console.log('Got request for /.git/objects/25/fe8b72b7fd6a1c46fa9ae3529bd566309257dc ... ');
});


app.get('/.git/objects/1a/ece81938e9f3a1938186113ead874a7b89473e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1a/ece81938e9f3a1938186113ead874a7b89473e'));
	console.log('Got request for /.git/objects/1a/ece81938e9f3a1938186113ead874a7b89473e ... ');
});


app.get('/.git/objects/8c/f12d10ecb2468200ed57ac2d6403b92487934d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8c/f12d10ecb2468200ed57ac2d6403b92487934d'));
	console.log('Got request for /.git/objects/8c/f12d10ecb2468200ed57ac2d6403b92487934d ... ');
});


app.get('/.git/objects/8c/54aaaebe7efb6514c0e43490bf05d343e597fa', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8c/54aaaebe7efb6514c0e43490bf05d343e597fa'));
	console.log('Got request for /.git/objects/8c/54aaaebe7efb6514c0e43490bf05d343e597fa ... ');
});


app.get('/.git/objects/95/e7b6580a87f2cec0f111849d97b9e253238736', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/95/e7b6580a87f2cec0f111849d97b9e253238736'));
	console.log('Got request for /.git/objects/95/e7b6580a87f2cec0f111849d97b9e253238736 ... ');
});


app.get('/.git/objects/8a/09bd5e4c10a9416ca79bd46341be35f4ecefa3', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8a/09bd5e4c10a9416ca79bd46341be35f4ecefa3'));
	console.log('Got request for /.git/objects/8a/09bd5e4c10a9416ca79bd46341be35f4ecefa3 ... ');
});


app.get('/.git/objects/8a/3ff1b18a712dc6a07630587fc7ed14b5c924d8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8a/3ff1b18a712dc6a07630587fc7ed14b5c924d8'));
	console.log('Got request for /.git/objects/8a/3ff1b18a712dc6a07630587fc7ed14b5c924d8 ... ');
});


app.get('/.git/objects/d9/c255de11a135e84a084e60518a3a188423c987', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d9/c255de11a135e84a084e60518a3a188423c987'));
	console.log('Got request for /.git/objects/d9/c255de11a135e84a084e60518a3a188423c987 ... ');
});


app.get('/.git/objects/d9/555d0b5793f0fa3222f1f3887b785c6b0527f1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d9/555d0b5793f0fa3222f1f3887b785c6b0527f1'));
	console.log('Got request for /.git/objects/d9/555d0b5793f0fa3222f1f3887b785c6b0527f1 ... ');
});


app.get('/.git/objects/22/477cf83472628782793d9976247ae468dc7296', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/22/477cf83472628782793d9976247ae468dc7296'));
	console.log('Got request for /.git/objects/22/477cf83472628782793d9976247ae468dc7296 ... ');
});


app.get('/.git/objects/16/e249bb8681c20bd849881473ef30a4d9cfbd9c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/16/e249bb8681c20bd849881473ef30a4d9cfbd9c'));
	console.log('Got request for /.git/objects/16/e249bb8681c20bd849881473ef30a4d9cfbd9c ... ');
});


app.get('/.git/objects/bd/77a7ccd533c993b7de5ff1e9178a13bd9b4fa6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/bd/77a7ccd533c993b7de5ff1e9178a13bd9b4fa6'));
	console.log('Got request for /.git/objects/bd/77a7ccd533c993b7de5ff1e9178a13bd9b4fa6 ... ');
});


app.get('/.git/objects/c6/3cd6b978380b9ac3d5bf7699ca2c74dff64a13', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c6/3cd6b978380b9ac3d5bf7699ca2c74dff64a13'));
	console.log('Got request for /.git/objects/c6/3cd6b978380b9ac3d5bf7699ca2c74dff64a13 ... ');
});


app.get('/.git/objects/c6/985d7fd819b5bbf68b94594d628654db610602', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c6/985d7fd819b5bbf68b94594d628654db610602'));
	console.log('Got request for /.git/objects/c6/985d7fd819b5bbf68b94594d628654db610602 ... ');
});


app.get('/.git/objects/dd/2f918a1a203963ae81c66d5d9009ac8c23172f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/dd/2f918a1a203963ae81c66d5d9009ac8c23172f'));
	console.log('Got request for /.git/objects/dd/2f918a1a203963ae81c66d5d9009ac8c23172f ... ');
});


app.get('/.git/objects/32/664d3334a8aabcd8e6a8077b8e5c79c6a81c1e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/32/664d3334a8aabcd8e6a8077b8e5c79c6a81c1e'));
	console.log('Got request for /.git/objects/32/664d3334a8aabcd8e6a8077b8e5c79c6a81c1e ... ');
});


app.get('/.git/objects/32/5ba9fe22c86881b759693e2e1cc5ded4460f0d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/32/5ba9fe22c86881b759693e2e1cc5ded4460f0d'));
	console.log('Got request for /.git/objects/32/5ba9fe22c86881b759693e2e1cc5ded4460f0d ... ');
});


app.get('/.git/objects/32/b610cdf9c94f4ae5ed7f7e1d3b3ef5bb347818', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/32/b610cdf9c94f4ae5ed7f7e1d3b3ef5bb347818'));
	console.log('Got request for /.git/objects/32/b610cdf9c94f4ae5ed7f7e1d3b3ef5bb347818 ... ');
});


app.get('/.git/objects/00/112a4dc5a2ed93c34f50279d801b9f29a92497', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/00/112a4dc5a2ed93c34f50279d801b9f29a92497'));
	console.log('Got request for /.git/objects/00/112a4dc5a2ed93c34f50279d801b9f29a92497 ... ');
});


app.get('/.git/objects/90/75b21184bad50b6d2144526e9c9bb60061ad2e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/90/75b21184bad50b6d2144526e9c9bb60061ad2e'));
	console.log('Got request for /.git/objects/90/75b21184bad50b6d2144526e9c9bb60061ad2e ... ');
});


app.get('/.git/objects/90/fa818f0eabe27ade0d94579b5831371953a029', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/90/fa818f0eabe27ade0d94579b5831371953a029'));
	console.log('Got request for /.git/objects/90/fa818f0eabe27ade0d94579b5831371953a029 ... ');
});


app.get('/.git/objects/70/48e923fc2a63f1a118ed8fa035d52c44b7c919', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/70/48e923fc2a63f1a118ed8fa035d52c44b7c919'));
	console.log('Got request for /.git/objects/70/48e923fc2a63f1a118ed8fa035d52c44b7c919 ... ');
});


app.get('/.git/objects/70/dc37b02236df7b855d9abfd4f1595c6cbc30d0', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/70/dc37b02236df7b855d9abfd4f1595c6cbc30d0'));
	console.log('Got request for /.git/objects/70/dc37b02236df7b855d9abfd4f1595c6cbc30d0 ... ');
});


app.get('/.git/objects/f2/f9a3bc057bc35fb8b5e1b39701b7fe8f4a440a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f2/f9a3bc057bc35fb8b5e1b39701b7fe8f4a440a'));
	console.log('Got request for /.git/objects/f2/f9a3bc057bc35fb8b5e1b39701b7fe8f4a440a ... ');
});


app.get('/.git/objects/f2/3cd9aca7c7cd906bc36ebb58ea0ce8f39b10d4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f2/3cd9aca7c7cd906bc36ebb58ea0ce8f39b10d4'));
	console.log('Got request for /.git/objects/f2/3cd9aca7c7cd906bc36ebb58ea0ce8f39b10d4 ... ');
});


app.get('/.git/objects/f2/1e753b6ceb51bf07e9c010f2f2517450c3e6e2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f2/1e753b6ceb51bf07e9c010f2f2517450c3e6e2'));
	console.log('Got request for /.git/objects/f2/1e753b6ceb51bf07e9c010f2f2517450c3e6e2 ... ');
});


app.get('/.git/objects/f2/c4eecce3a4740b0aab2f8aa648f68a10c50aa9', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f2/c4eecce3a4740b0aab2f8aa648f68a10c50aa9'));
	console.log('Got request for /.git/objects/f2/c4eecce3a4740b0aab2f8aa648f68a10c50aa9 ... ');
});


app.get('/.git/objects/53/d8cb611604e640eabe01b2e5795739b49016f0', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/53/d8cb611604e640eabe01b2e5795739b49016f0'));
	console.log('Got request for /.git/objects/53/d8cb611604e640eabe01b2e5795739b49016f0 ... ');
});


app.get('/.git/objects/47/a948525d1e6876444a9281d0cbfad8f95f6c15', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/47/a948525d1e6876444a9281d0cbfad8f95f6c15'));
	console.log('Got request for /.git/objects/47/a948525d1e6876444a9281d0cbfad8f95f6c15 ... ');
});


app.get('/.git/objects/47/97439db1ff66a4bbb70d9cb2740f44aaa79ea8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/47/97439db1ff66a4bbb70d9cb2740f44aaa79ea8'));
	console.log('Got request for /.git/objects/47/97439db1ff66a4bbb70d9cb2740f44aaa79ea8 ... ');
});


app.get('/.git/objects/e0/01a979d2b487b4d9d9872fe402ac7152287515', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e0/01a979d2b487b4d9d9872fe402ac7152287515'));
	console.log('Got request for /.git/objects/e0/01a979d2b487b4d9d9872fe402ac7152287515 ... ');
});


app.get('/.git/objects/c2/9514992a77a0fd7f4e87254b14c72d16db8da0', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c2/9514992a77a0fd7f4e87254b14c72d16db8da0'));
	console.log('Got request for /.git/objects/c2/9514992a77a0fd7f4e87254b14c72d16db8da0 ... ');
});


app.get('/.git/objects/ec/d26cd07a452f88b40722d0dade9125074a9f64', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ec/d26cd07a452f88b40722d0dade9125074a9f64'));
	console.log('Got request for /.git/objects/ec/d26cd07a452f88b40722d0dade9125074a9f64 ... ');
});


app.get('/.git/objects/ec/80a9348552e9ddbe136e997c6633fd86f97332', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ec/80a9348552e9ddbe136e997c6633fd86f97332'));
	console.log('Got request for /.git/objects/ec/80a9348552e9ddbe136e997c6633fd86f97332 ... ');
});


app.get('/.git/objects/ec/1d7b044a5d67c11f758c76e09680dcb798254b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ec/1d7b044a5d67c11f758c76e09680dcb798254b'));
	console.log('Got request for /.git/objects/ec/1d7b044a5d67c11f758c76e09680dcb798254b ... ');
});


app.get('/.git/objects/80/129a70b56ebedcb50a448a6a54318ac17f8284', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/80/129a70b56ebedcb50a448a6a54318ac17f8284'));
	console.log('Got request for /.git/objects/80/129a70b56ebedcb50a448a6a54318ac17f8284 ... ');
});


app.get('/.git/objects/88/fb3bf91fb60e39fc5e2d573e19a296ea6f584c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/88/fb3bf91fb60e39fc5e2d573e19a296ea6f584c'));
	console.log('Got request for /.git/objects/88/fb3bf91fb60e39fc5e2d573e19a296ea6f584c ... ');
});


app.get('/.git/objects/88/b4b00ea986f29dc55f1f6c3c549908dfcba512', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/88/b4b00ea986f29dc55f1f6c3c549908dfcba512'));
	console.log('Got request for /.git/objects/88/b4b00ea986f29dc55f1f6c3c549908dfcba512 ... ');
});


app.get('/.git/objects/4a/7426cf381c99672cf3a125995bd71a1c5e5963', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4a/7426cf381c99672cf3a125995bd71a1c5e5963'));
	console.log('Got request for /.git/objects/4a/7426cf381c99672cf3a125995bd71a1c5e5963 ... ');
});


app.get('/.git/objects/4a/65eeb86bcdb1a698ee351bc2f256aaff6e9e9e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4a/65eeb86bcdb1a698ee351bc2f256aaff6e9e9e'));
	console.log('Got request for /.git/objects/4a/65eeb86bcdb1a698ee351bc2f256aaff6e9e9e ... ');
});


app.get('/.git/objects/4a/81153e91e6cf76cd1544097bfa2b6a8b8b740e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4a/81153e91e6cf76cd1544097bfa2b6a8b8b740e'));
	console.log('Got request for /.git/objects/4a/81153e91e6cf76cd1544097bfa2b6a8b8b740e ... ');
});


app.get('/.git/objects/a4/00a190c66a1aa567bdc904ec36c1af99fbaf9c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a4/00a190c66a1aa567bdc904ec36c1af99fbaf9c'));
	console.log('Got request for /.git/objects/a4/00a190c66a1aa567bdc904ec36c1af99fbaf9c ... ');
});


app.get('/.git/objects/a4/afdc6ee420a949ad990155cf9d0b38f24d5ed1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a4/afdc6ee420a949ad990155cf9d0b38f24d5ed1'));
	console.log('Got request for /.git/objects/a4/afdc6ee420a949ad990155cf9d0b38f24d5ed1 ... ');
});


app.get('/.git/objects/a4/5a751ff458b8b8d4d8a20b91df2f1060e68153', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a4/5a751ff458b8b8d4d8a20b91df2f1060e68153'));
	console.log('Got request for /.git/objects/a4/5a751ff458b8b8d4d8a20b91df2f1060e68153 ... ');
});


app.get('/.git/objects/9d/c916d52711d82e004ac5cf7b7f3f691d0ad10e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9d/c916d52711d82e004ac5cf7b7f3f691d0ad10e'));
	console.log('Got request for /.git/objects/9d/c916d52711d82e004ac5cf7b7f3f691d0ad10e ... ');
});


app.get('/.git/objects/9d/33220f3b2011fc92a1f9e800ba402edb7eec92', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9d/33220f3b2011fc92a1f9e800ba402edb7eec92'));
	console.log('Got request for /.git/objects/9d/33220f3b2011fc92a1f9e800ba402edb7eec92 ... ');
});


app.get('/.git/objects/9d/946a81a4854f4cf518ea58a940e0b2d8bc7580', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9d/946a81a4854f4cf518ea58a940e0b2d8bc7580'));
	console.log('Got request for /.git/objects/9d/946a81a4854f4cf518ea58a940e0b2d8bc7580 ... ');
});


app.get('/.git/objects/9d/9cc7e6f431d4b5878ccc7634a1b327438118af', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9d/9cc7e6f431d4b5878ccc7634a1b327438118af'));
	console.log('Got request for /.git/objects/9d/9cc7e6f431d4b5878ccc7634a1b327438118af ... ');
});


app.get('/.git/objects/f6/b519a4ee70a1fa59d2f816ff0cc0db2c2c88ba', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f6/b519a4ee70a1fa59d2f816ff0cc0db2c2c88ba'));
	console.log('Got request for /.git/objects/f6/b519a4ee70a1fa59d2f816ff0cc0db2c2c88ba ... ');
});


app.get('/.git/objects/f6/e644425076b25c5af80194ed66c106b6f3e009', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f6/e644425076b25c5af80194ed66c106b6f3e009'));
	console.log('Got request for /.git/objects/f6/e644425076b25c5af80194ed66c106b6f3e009 ... ');
});


app.get('/.git/objects/f6/a3d08d85f8b2c7e2372d8ac2dc6f755ac45002', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f6/a3d08d85f8b2c7e2372d8ac2dc6f755ac45002'));
	console.log('Got request for /.git/objects/f6/a3d08d85f8b2c7e2372d8ac2dc6f755ac45002 ... ');
});


app.get('/.git/objects/f6/0e85ed0d3bb9c787c01ffc2d8018a8b9dbc2d6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f6/0e85ed0d3bb9c787c01ffc2d8018a8b9dbc2d6'));
	console.log('Got request for /.git/objects/f6/0e85ed0d3bb9c787c01ffc2d8018a8b9dbc2d6 ... ');
});


app.get('/.git/objects/f6/2bbae306c7e1bc28896aab8fe7bfb700a9a33e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f6/2bbae306c7e1bc28896aab8fe7bfb700a9a33e'));
	console.log('Got request for /.git/objects/f6/2bbae306c7e1bc28896aab8fe7bfb700a9a33e ... ');
});


app.get('/.git/objects/4e/780a332931741759477798ae671ad0f683f26d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4e/780a332931741759477798ae671ad0f683f26d'));
	console.log('Got request for /.git/objects/4e/780a332931741759477798ae671ad0f683f26d ... ');
});


app.get('/.git/objects/cf/71f5c5ca8c1d5a2946b3f5761b8769fc46071b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/cf/71f5c5ca8c1d5a2946b3f5761b8769fc46071b'));
	console.log('Got request for /.git/objects/cf/71f5c5ca8c1d5a2946b3f5761b8769fc46071b ... ');
});


app.get('/.git/objects/82/24f481abd7c12893aed9795bde09c01ad77b12', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/82/24f481abd7c12893aed9795bde09c01ad77b12'));
	console.log('Got request for /.git/objects/82/24f481abd7c12893aed9795bde09c01ad77b12 ... ');
});


app.get('/.git/objects/82/fd14d9a8db02039bdf5b2e5f804f5694731be6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/82/fd14d9a8db02039bdf5b2e5f804f5694731be6'));
	console.log('Got request for /.git/objects/82/fd14d9a8db02039bdf5b2e5f804f5694731be6 ... ');
});


app.get('/.git/objects/82/8e6e76adb88435fb4a046ec7fb0bedbc216536', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/82/8e6e76adb88435fb4a046ec7fb0bedbc216536'));
	console.log('Got request for /.git/objects/82/8e6e76adb88435fb4a046ec7fb0bedbc216536 ... ');
});


app.get('/.git/objects/4d/d4c9cc152b4d670a8bf73774ce0d0f9e7dbd51', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4d/d4c9cc152b4d670a8bf73774ce0d0f9e7dbd51'));
	console.log('Got request for /.git/objects/4d/d4c9cc152b4d670a8bf73774ce0d0f9e7dbd51 ... ');
});


app.get('/.git/objects/66/8f2adad49fc797835fa399b8a138c904afaab1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/66/8f2adad49fc797835fa399b8a138c904afaab1'));
	console.log('Got request for /.git/objects/66/8f2adad49fc797835fa399b8a138c904afaab1 ... ');
});


app.get('/.git/objects/66/42fe37cc2732b5eb282a81880986a5fc29d154', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/66/42fe37cc2732b5eb282a81880986a5fc29d154'));
	console.log('Got request for /.git/objects/66/42fe37cc2732b5eb282a81880986a5fc29d154 ... ');
});


app.get('/.git/objects/66/480de49e946a23ffade0cd333c5583308593f6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/66/480de49e946a23ffade0cd333c5583308593f6'));
	console.log('Got request for /.git/objects/66/480de49e946a23ffade0cd333c5583308593f6 ... ');
});


app.get('/.git/objects/66/305cb79b9df86a4713538f9dfbbe13a449c202', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/66/305cb79b9df86a4713538f9dfbbe13a449c202'));
	console.log('Got request for /.git/objects/66/305cb79b9df86a4713538f9dfbbe13a449c202 ... ');
});


app.get('/.git/objects/73/717dc35956ac27f0c2594ef24a7194261e1272', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/73/717dc35956ac27f0c2594ef24a7194261e1272'));
	console.log('Got request for /.git/objects/73/717dc35956ac27f0c2594ef24a7194261e1272 ... ');
});


app.get('/.git/objects/73/078881725e21a8e4e8a311758b40704a249950', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/73/078881725e21a8e4e8a311758b40704a249950'));
	console.log('Got request for /.git/objects/73/078881725e21a8e4e8a311758b40704a249950 ... ');
});


app.get('/.git/objects/73/25e07724e3fee76b91b1e9c2a48e88ead411e5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/73/25e07724e3fee76b91b1e9c2a48e88ead411e5'));
	console.log('Got request for /.git/objects/73/25e07724e3fee76b91b1e9c2a48e88ead411e5 ... ');
});


app.get('/.git/objects/73/1e2ae9f4252738acb4bff46c58e6c42ff9374b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/73/1e2ae9f4252738acb4bff46c58e6c42ff9374b'));
	console.log('Got request for /.git/objects/73/1e2ae9f4252738acb4bff46c58e6c42ff9374b ... ');
});


app.get('/.git/objects/1b/a8c2b92fdbd1b103fcf9cc9e3ef8e4bc437975', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1b/a8c2b92fdbd1b103fcf9cc9e3ef8e4bc437975'));
	console.log('Got request for /.git/objects/1b/a8c2b92fdbd1b103fcf9cc9e3ef8e4bc437975 ... ');
});


app.get('/.git/objects/1b/35b455db9379cf99dc44125e45761c84cb03cb', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1b/35b455db9379cf99dc44125e45761c84cb03cb'));
	console.log('Got request for /.git/objects/1b/35b455db9379cf99dc44125e45761c84cb03cb ... ');
});


app.get('/.git/objects/1b/a121f92920fa029fc29f74dc725c48fac2c12c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1b/a121f92920fa029fc29f74dc725c48fac2c12c'));
	console.log('Got request for /.git/objects/1b/a121f92920fa029fc29f74dc725c48fac2c12c ... ');
});


app.get('/.git/objects/f7/b28130f6a530e0df65d8204fbf175a21d69159', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f7/b28130f6a530e0df65d8204fbf175a21d69159'));
	console.log('Got request for /.git/objects/f7/b28130f6a530e0df65d8204fbf175a21d69159 ... ');
});


app.get('/.git/objects/8f/906f28ea0016ad64aa75eccd826f1511892cd8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8f/906f28ea0016ad64aa75eccd826f1511892cd8'));
	console.log('Got request for /.git/objects/8f/906f28ea0016ad64aa75eccd826f1511892cd8 ... ');
});


app.get('/.git/objects/8f/23c6403ec4962cc9cce1ff1ba0341bc4038709', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8f/23c6403ec4962cc9cce1ff1ba0341bc4038709'));
	console.log('Got request for /.git/objects/8f/23c6403ec4962cc9cce1ff1ba0341bc4038709 ... ');
});


app.get('/.git/objects/8f/427357331dcade08c2f5c1c53d9f5a37201057', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8f/427357331dcade08c2f5c1c53d9f5a37201057'));
	console.log('Got request for /.git/objects/8f/427357331dcade08c2f5c1c53d9f5a37201057 ... ');
});


app.get('/.git/objects/8f/d6bc884c9e29f4e591b93d8fab1b1a30f913c7', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8f/d6bc884c9e29f4e591b93d8fab1b1a30f913c7'));
	console.log('Got request for /.git/objects/8f/d6bc884c9e29f4e591b93d8fab1b1a30f913c7 ... ');
});


app.get('/.git/objects/a5/e929110d2a50c5b29011f78b8b64d52910ca32', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a5/e929110d2a50c5b29011f78b8b64d52910ca32'));
	console.log('Got request for /.git/objects/a5/e929110d2a50c5b29011f78b8b64d52910ca32 ... ');
});


app.get('/.git/objects/a5/1e655151b8e5aa80865af2587bd4c2799badad', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a5/1e655151b8e5aa80865af2587bd4c2799badad'));
	console.log('Got request for /.git/objects/a5/1e655151b8e5aa80865af2587bd4c2799badad ... ');
});


app.get('/.git/objects/a5/59b7a53dc514d388aeec10fe907252215af830', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a5/59b7a53dc514d388aeec10fe907252215af830'));
	console.log('Got request for /.git/objects/a5/59b7a53dc514d388aeec10fe907252215af830 ... ');
});


app.get('/.git/objects/7f/cbd99a196df42da1ca75a894b89580d3521378', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7f/cbd99a196df42da1ca75a894b89580d3521378'));
	console.log('Got request for /.git/objects/7f/cbd99a196df42da1ca75a894b89580d3521378 ... ');
});


app.get('/.git/objects/7f/2e369a764ca71835eebc878c46e29f268d0441', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7f/2e369a764ca71835eebc878c46e29f268d0441'));
	console.log('Got request for /.git/objects/7f/2e369a764ca71835eebc878c46e29f268d0441 ... ');
});


app.get('/.git/objects/7f/09cd5eba37aa907243cc560118da72234b5a0c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7f/09cd5eba37aa907243cc560118da72234b5a0c'));
	console.log('Got request for /.git/objects/7f/09cd5eba37aa907243cc560118da72234b5a0c ... ');
});


app.get('/.git/objects/7f/6bd9bfaf813f9ec851fbf118c3dbc1158118f2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7f/6bd9bfaf813f9ec851fbf118c3dbc1158118f2'));
	console.log('Got request for /.git/objects/7f/6bd9bfaf813f9ec851fbf118c3dbc1158118f2 ... ');
});


app.get('/.git/objects/7f/681992b231b59117f8a947deb795a9a58dbaa6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7f/681992b231b59117f8a947deb795a9a58dbaa6'));
	console.log('Got request for /.git/objects/7f/681992b231b59117f8a947deb795a9a58dbaa6 ... ');
});


app.get('/.git/objects/7f/d2cff19b5f09fbcaf505dd15a976aedee45e3b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7f/d2cff19b5f09fbcaf505dd15a976aedee45e3b'));
	console.log('Got request for /.git/objects/7f/d2cff19b5f09fbcaf505dd15a976aedee45e3b ... ');
});


app.get('/.git/objects/d4/efb5e371e5ae3d42c74df3c4555a3cec3bf788', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d4/efb5e371e5ae3d42c74df3c4555a3cec3bf788'));
	console.log('Got request for /.git/objects/d4/efb5e371e5ae3d42c74df3c4555a3cec3bf788 ... ');
});


app.get('/.git/objects/cd/35b5c28202f64730a90eb36afdcc4efd9eaf8a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/cd/35b5c28202f64730a90eb36afdcc4efd9eaf8a'));
	console.log('Got request for /.git/objects/cd/35b5c28202f64730a90eb36afdcc4efd9eaf8a ... ');
});


app.get('/.git/objects/65/13d6cf14df77d7aa73c294b5b6432bcdee680f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/65/13d6cf14df77d7aa73c294b5b6432bcdee680f'));
	console.log('Got request for /.git/objects/65/13d6cf14df77d7aa73c294b5b6432bcdee680f ... ');
});


app.get('/.git/objects/65/f375cf7c70b46d95d73f795b8e25fc29722d5d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/65/f375cf7c70b46d95d73f795b8e25fc29722d5d'));
	console.log('Got request for /.git/objects/65/f375cf7c70b46d95d73f795b8e25fc29722d5d ... ');
});


app.get('/.git/objects/8d/6b08b27633ebde7562fb8329243e9cdff30e2a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8d/6b08b27633ebde7562fb8329243e9cdff30e2a'));
	console.log('Got request for /.git/objects/8d/6b08b27633ebde7562fb8329243e9cdff30e2a ... ');
});


app.get('/.git/objects/8d/acd3a05135767264ff4fa9363d2f1b856370ae', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8d/acd3a05135767264ff4fa9363d2f1b856370ae'));
	console.log('Got request for /.git/objects/8d/acd3a05135767264ff4fa9363d2f1b856370ae ... ');
});


app.get('/.git/objects/8d/b0cf32c6af70385562d9b0d35c7ede97a88c6d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8d/b0cf32c6af70385562d9b0d35c7ede97a88c6d'));
	console.log('Got request for /.git/objects/8d/b0cf32c6af70385562d9b0d35c7ede97a88c6d ... ');
});


app.get('/.git/objects/64/ddda4f5525e26b99d63cd21a967baad7592144', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/64/ddda4f5525e26b99d63cd21a967baad7592144'));
	console.log('Got request for /.git/objects/64/ddda4f5525e26b99d63cd21a967baad7592144 ... ');
});


app.get('/.git/objects/64/e26b0ef47f6e2c3c02c965a670952164f2f33a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/64/e26b0ef47f6e2c3c02c965a670952164f2f33a'));
	console.log('Got request for /.git/objects/64/e26b0ef47f6e2c3c02c965a670952164f2f33a ... ');
});


app.get('/.git/objects/64/efac4e1e37af702e3f96d4ee5a4292ba3006ae', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/64/efac4e1e37af702e3f96d4ee5a4292ba3006ae'));
	console.log('Got request for /.git/objects/64/efac4e1e37af702e3f96d4ee5a4292ba3006ae ... ');
});


app.get('/.git/objects/64/06b82a9c4e7999689f993c851acee0ceb99977', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/64/06b82a9c4e7999689f993c851acee0ceb99977'));
	console.log('Got request for /.git/objects/64/06b82a9c4e7999689f993c851acee0ceb99977 ... ');
});


app.get('/.git/objects/64/78286867cce909144f56e9e0f13ab035a4cab7', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/64/78286867cce909144f56e9e0f13ab035a4cab7'));
	console.log('Got request for /.git/objects/64/78286867cce909144f56e9e0f13ab035a4cab7 ... ');
});


app.get('/.git/objects/3f/512d127618e50c17f9974f2bdf8c5dfe6253f1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/3f/512d127618e50c17f9974f2bdf8c5dfe6253f1'));
	console.log('Got request for /.git/objects/3f/512d127618e50c17f9974f2bdf8c5dfe6253f1 ... ');
});


app.get('/.git/objects/3f/eb5cdf88a5af11c54392dabb2435079e118e03', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/3f/eb5cdf88a5af11c54392dabb2435079e118e03'));
	console.log('Got request for /.git/objects/3f/eb5cdf88a5af11c54392dabb2435079e118e03 ... ');
});


app.get('/.git/objects/3f/fe45da274a301e94d226a92d3f173a941b9bb2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/3f/fe45da274a301e94d226a92d3f173a941b9bb2'));
	console.log('Got request for /.git/objects/3f/fe45da274a301e94d226a92d3f173a941b9bb2 ... ');
});


app.get('/.git/objects/2b/9959926d74aae6377d2f119eb10cea59dbb980', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2b/9959926d74aae6377d2f119eb10cea59dbb980'));
	console.log('Got request for /.git/objects/2b/9959926d74aae6377d2f119eb10cea59dbb980 ... ');
});


app.get('/.git/objects/2b/b160f80b36e483706903dee281abdd031f0a88', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2b/b160f80b36e483706903dee281abdd031f0a88'));
	console.log('Got request for /.git/objects/2b/b160f80b36e483706903dee281abdd031f0a88 ... ');
});


app.get('/.git/objects/e3/2302d9d8d10c8ba9c3a128af53e23877f21245', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e3/2302d9d8d10c8ba9c3a128af53e23877f21245'));
	console.log('Got request for /.git/objects/e3/2302d9d8d10c8ba9c3a128af53e23877f21245 ... ');
});


app.get('/.git/objects/ba/216c67f850d6e9e886c158c1e5c9705a28cc0e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ba/216c67f850d6e9e886c158c1e5c9705a28cc0e'));
	console.log('Got request for /.git/objects/ba/216c67f850d6e9e886c158c1e5c9705a28cc0e ... ');
});


app.get('/.git/objects/c1/ff43b656077d4533e3a77c83601049c443116c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c1/ff43b656077d4533e3a77c83601049c443116c'));
	console.log('Got request for /.git/objects/c1/ff43b656077d4533e3a77c83601049c443116c ... ');
});


app.get('/.git/objects/14/51763c8a8b0b6c437cde2cb96e4a38edd3c643', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/14/51763c8a8b0b6c437cde2cb96e4a38edd3c643'));
	console.log('Got request for /.git/objects/14/51763c8a8b0b6c437cde2cb96e4a38edd3c643 ... ');
});


app.get('/.git/objects/14/8912aebb601628ce87abdd21030cae70b3dcff', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/14/8912aebb601628ce87abdd21030cae70b3dcff'));
	console.log('Got request for /.git/objects/14/8912aebb601628ce87abdd21030cae70b3dcff ... ');
});


app.get('/.git/objects/14/5955ba6af179059ba61ceb579fe1911885e299', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/14/5955ba6af179059ba61ceb579fe1911885e299'));
	console.log('Got request for /.git/objects/14/5955ba6af179059ba61ceb579fe1911885e299 ... ');
});


app.get('/.git/objects/14/7e52caa1476c2dddb0fcb67e7e3ce1418391c6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/14/7e52caa1476c2dddb0fcb67e7e3ce1418391c6'));
	console.log('Got request for /.git/objects/14/7e52caa1476c2dddb0fcb67e7e3ce1418391c6 ... ');
});


app.get('/.git/objects/39/df45ea9ffeb6c1fb5010dd6ed2064d5dd6a94a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/39/df45ea9ffeb6c1fb5010dd6ed2064d5dd6a94a'));
	console.log('Got request for /.git/objects/39/df45ea9ffeb6c1fb5010dd6ed2064d5dd6a94a ... ');
});


app.get('/.git/objects/39/b666183bf2132424550cbd33c3fbfaaf236f8e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/39/b666183bf2132424550cbd33c3fbfaaf236f8e'));
	console.log('Got request for /.git/objects/39/b666183bf2132424550cbd33c3fbfaaf236f8e ... ');
});


app.get('/.git/objects/18/4f28dc60baac89170c2f5a258277dd6d18c225', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/18/4f28dc60baac89170c2f5a258277dd6d18c225'));
	console.log('Got request for /.git/objects/18/4f28dc60baac89170c2f5a258277dd6d18c225 ... ');
});


app.get('/.git/objects/18/6f75bdad58f373fe03cc67f5549556d91485b8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/18/6f75bdad58f373fe03cc67f5549556d91485b8'));
	console.log('Got request for /.git/objects/18/6f75bdad58f373fe03cc67f5549556d91485b8 ... ');
});


app.get('/.git/objects/18/9e8f717d0e4c6117268c0f4583bb8e78c505b4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/18/9e8f717d0e4c6117268c0f4583bb8e78c505b4'));
	console.log('Got request for /.git/objects/18/9e8f717d0e4c6117268c0f4583bb8e78c505b4 ... ');
});


app.get('/.git/objects/84/3072f2492b05e0fef73376fa8280bd0973a3e4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/84/3072f2492b05e0fef73376fa8280bd0973a3e4'));
	console.log('Got request for /.git/objects/84/3072f2492b05e0fef73376fa8280bd0973a3e4 ... ');
});


app.get('/.git/objects/84/b00372350089cc5d3c08a79281d70fb8f94c56', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/84/b00372350089cc5d3c08a79281d70fb8f94c56'));
	console.log('Got request for /.git/objects/84/b00372350089cc5d3c08a79281d70fb8f94c56 ... ');
});


app.get('/.git/objects/84/4a1323f5fdb1531fadf07cabe087885f9c7e50', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/84/4a1323f5fdb1531fadf07cabe087885f9c7e50'));
	console.log('Got request for /.git/objects/84/4a1323f5fdb1531fadf07cabe087885f9c7e50 ... ');
});


app.get('/.git/objects/a1/2caa5a7b2fdb2f593c3f47330d8d4fc5397a4d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a1/2caa5a7b2fdb2f593c3f47330d8d4fc5397a4d'));
	console.log('Got request for /.git/objects/a1/2caa5a7b2fdb2f593c3f47330d8d4fc5397a4d ... ');
});


app.get('/.git/objects/9b/d3bdd37834b538739da958acb4dd993851612a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9b/d3bdd37834b538739da958acb4dd993851612a'));
	console.log('Got request for /.git/objects/9b/d3bdd37834b538739da958acb4dd993851612a ... ');
});


app.get('/.git/objects/9b/5331749a3611f99bba59611bc2d77999a309a1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9b/5331749a3611f99bba59611bc2d77999a309a1'));
	console.log('Got request for /.git/objects/9b/5331749a3611f99bba59611bc2d77999a309a1 ... ');
});


app.get('/.git/objects/fd/a9ac754dccc6fa5c6e5e53816fa5a1f9a9e557', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/fd/a9ac754dccc6fa5c6e5e53816fa5a1f9a9e557'));
	console.log('Got request for /.git/objects/fd/a9ac754dccc6fa5c6e5e53816fa5a1f9a9e557 ... ');
});


app.get('/.git/objects/fd/e62737d289e393b33b3585660a04dfd22f008a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/fd/e62737d289e393b33b3585660a04dfd22f008a'));
	console.log('Got request for /.git/objects/fd/e62737d289e393b33b3585660a04dfd22f008a ... ');
});


app.get('/.git/objects/d0/910a3d3e9b0b2af2e55c1c57360c0afaef08be', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d0/910a3d3e9b0b2af2e55c1c57360c0afaef08be'));
	console.log('Got request for /.git/objects/d0/910a3d3e9b0b2af2e55c1c57360c0afaef08be ... ');
});


app.get('/.git/objects/d0/31dd434d0a69b5768a52bf9ca5083b89905fc6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d0/31dd434d0a69b5768a52bf9ca5083b89905fc6'));
	console.log('Got request for /.git/objects/d0/31dd434d0a69b5768a52bf9ca5083b89905fc6 ... ');
});


app.get('/.git/objects/d0/5421f3c74c68fa3f88a92c2391e907f689b24d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d0/5421f3c74c68fa3f88a92c2391e907f689b24d'));
	console.log('Got request for /.git/objects/d0/5421f3c74c68fa3f88a92c2391e907f689b24d ... ');
});


app.get('/.git/objects/26/dc937e288dd946a12063febad1230ad82d1b81', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/26/dc937e288dd946a12063febad1230ad82d1b81'));
	console.log('Got request for /.git/objects/26/dc937e288dd946a12063febad1230ad82d1b81 ... ');
});


app.get('/.git/objects/26/59de7d6754b1665aa5915c47a34237606ac5be', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/26/59de7d6754b1665aa5915c47a34237606ac5be'));
	console.log('Got request for /.git/objects/26/59de7d6754b1665aa5915c47a34237606ac5be ... ');
});


app.get('/.git/objects/26/e1b73331d317ea1d222f327fb99a1a2a2fb55f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/26/e1b73331d317ea1d222f327fb99a1a2a2fb55f'));
	console.log('Got request for /.git/objects/26/e1b73331d317ea1d222f327fb99a1a2a2fb55f ... ');
});


app.get('/.git/objects/a2/bb5dfedd4a85ca2cacbf1bdc2ad97b5b146569', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a2/bb5dfedd4a85ca2cacbf1bdc2ad97b5b146569'));
	console.log('Got request for /.git/objects/a2/bb5dfedd4a85ca2cacbf1bdc2ad97b5b146569 ... ');
});


app.get('/.git/objects/33/60c6b2bd946b1b7f9cd2aaac780eeaf1bef4ef', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/33/60c6b2bd946b1b7f9cd2aaac780eeaf1bef4ef'));
	console.log('Got request for /.git/objects/33/60c6b2bd946b1b7f9cd2aaac780eeaf1bef4ef ... ');
});


app.get('/.git/objects/33/f2ffe8b0d92224724eb05163b64fbf8adbf5cf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/33/f2ffe8b0d92224724eb05163b64fbf8adbf5cf'));
	console.log('Got request for /.git/objects/33/f2ffe8b0d92224724eb05163b64fbf8adbf5cf ... ');
});


app.get('/.git/objects/d8/b801d41aa89578b5225026a1616b585cf85229', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d8/b801d41aa89578b5225026a1616b585cf85229'));
	console.log('Got request for /.git/objects/d8/b801d41aa89578b5225026a1616b585cf85229 ... ');
});


app.get('/.git/objects/d8/837179b19ad970c0926e7f95d8049171e1801e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d8/837179b19ad970c0926e7f95d8049171e1801e'));
	console.log('Got request for /.git/objects/d8/837179b19ad970c0926e7f95d8049171e1801e ... ');
});


app.get('/.git/objects/71/f3a95cd18f42154d16b55555b85f5f658cb1f6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/71/f3a95cd18f42154d16b55555b85f5f658cb1f6'));
	console.log('Got request for /.git/objects/71/f3a95cd18f42154d16b55555b85f5f658cb1f6 ... ');
});


app.get('/.git/objects/71/fc01d80f5863c9c1bff2996c6e97afd1b9d82f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/71/fc01d80f5863c9c1bff2996c6e97afd1b9d82f'));
	console.log('Got request for /.git/objects/71/fc01d80f5863c9c1bff2996c6e97afd1b9d82f ... ');
});


app.get('/.git/objects/71/7777b227fdb346a0e15bcf6d1ec037010fd3a8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/71/7777b227fdb346a0e15bcf6d1ec037010fd3a8'));
	console.log('Got request for /.git/objects/71/7777b227fdb346a0e15bcf6d1ec037010fd3a8 ... ');
});


app.get('/.git/objects/7c/83e86a2e1e5cb377ff6853056c7a067db97750', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7c/83e86a2e1e5cb377ff6853056c7a067db97750'));
	console.log('Got request for /.git/objects/7c/83e86a2e1e5cb377ff6853056c7a067db97750 ... ');
});


app.get('/.git/objects/cb/9bbe96b7d92705cfd1dbd565fa4e9ade6bc368', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/cb/9bbe96b7d92705cfd1dbd565fa4e9ade6bc368'));
	console.log('Got request for /.git/objects/cb/9bbe96b7d92705cfd1dbd565fa4e9ade6bc368 ... ');
});


app.get('/.git/objects/30/566ba1dcbb0f0bd5fc1bb29a8b2a9470dbc962', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/30/566ba1dcbb0f0bd5fc1bb29a8b2a9470dbc962'));
	console.log('Got request for /.git/objects/30/566ba1dcbb0f0bd5fc1bb29a8b2a9470dbc962 ... ');
});


app.get('/.git/objects/30/24731346e0db498113710ec794203275d14946', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/30/24731346e0db498113710ec794203275d14946'));
	console.log('Got request for /.git/objects/30/24731346e0db498113710ec794203275d14946 ... ');
});


app.get('/.git/objects/30/4660d40ea4c1005b43c8ec129898612977f7e0', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/30/4660d40ea4c1005b43c8ec129898612977f7e0'));
	console.log('Got request for /.git/objects/30/4660d40ea4c1005b43c8ec129898612977f7e0 ... ');
});


app.get('/.git/objects/c4/13ac09721f864b696a6339ae491195664ed5d5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c4/13ac09721f864b696a6339ae491195664ed5d5'));
	console.log('Got request for /.git/objects/c4/13ac09721f864b696a6339ae491195664ed5d5 ... ');
});


app.get('/.git/objects/c4/a5dca1d628329f67ce9bf74d9d6e006aa15c5b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c4/a5dca1d628329f67ce9bf74d9d6e006aa15c5b'));
	console.log('Got request for /.git/objects/c4/a5dca1d628329f67ce9bf74d9d6e006aa15c5b ... ');
});


app.get('/.git/objects/c4/f12cf7934d23e373fc4310d7d748f00d0f114a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c4/f12cf7934d23e373fc4310d7d748f00d0f114a'));
	console.log('Got request for /.git/objects/c4/f12cf7934d23e373fc4310d7d748f00d0f114a ... ');
});


app.get('/.git/objects/c4/f582b168b2e4e6fb8132197bf1bed14fed786e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c4/f582b168b2e4e6fb8132197bf1bed14fed786e'));
	console.log('Got request for /.git/objects/c4/f582b168b2e4e6fb8132197bf1bed14fed786e ... ');
});


app.get('/.git/objects/5c/bc079708c93f0638472f00d25eca1711768ee0', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/5c/bc079708c93f0638472f00d25eca1711768ee0'));
	console.log('Got request for /.git/objects/5c/bc079708c93f0638472f00d25eca1711768ee0 ... ');
});


app.get('/.git/objects/a8/5b723c7e67d46316e85e7422bd5088e9136042', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a8/5b723c7e67d46316e85e7422bd5088e9136042'));
	console.log('Got request for /.git/objects/a8/5b723c7e67d46316e85e7422bd5088e9136042 ... ');
});


app.get('/.git/objects/31/ad8149572f070f231670ed9feae9e138776cca', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/31/ad8149572f070f231670ed9feae9e138776cca'));
	console.log('Got request for /.git/objects/31/ad8149572f070f231670ed9feae9e138776cca ... ');
});


app.get('/.git/objects/31/778d834858743e2b4a4f1ff2ba72f64e3aefdf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/31/778d834858743e2b4a4f1ff2ba72f64e3aefdf'));
	console.log('Got request for /.git/objects/31/778d834858743e2b4a4f1ff2ba72f64e3aefdf ... ');
});


app.get('/.git/objects/31/1039c23d7ad06e2cb52b5776c3a44e7b991ca1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/31/1039c23d7ad06e2cb52b5776c3a44e7b991ca1'));
	console.log('Got request for /.git/objects/31/1039c23d7ad06e2cb52b5776c3a44e7b991ca1 ... ');
});


app.get('/.git/objects/31/251e0adaaf7d33123fdfe0909becf654f65c6c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/31/251e0adaaf7d33123fdfe0909becf654f65c6c'));
	console.log('Got request for /.git/objects/31/251e0adaaf7d33123fdfe0909becf654f65c6c ... ');
});


app.get('/.git/objects/61/09ed5286c8ce86e15979f0eaa9c98926e83aba', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/61/09ed5286c8ce86e15979f0eaa9c98926e83aba'));
	console.log('Got request for /.git/objects/61/09ed5286c8ce86e15979f0eaa9c98926e83aba ... ');
});


app.get('/.git/objects/61/13d179d967700e41ac2ecc6a144882448f4f26', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/61/13d179d967700e41ac2ecc6a144882448f4f26'));
	console.log('Got request for /.git/objects/61/13d179d967700e41ac2ecc6a144882448f4f26 ... ');
});


app.get('/.git/objects/61/1987fa02c0fb811eb6f8d167334ea07b18ad6f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/61/1987fa02c0fb811eb6f8d167334ea07b18ad6f'));
	console.log('Got request for /.git/objects/61/1987fa02c0fb811eb6f8d167334ea07b18ad6f ... ');
});


app.get('/.git/objects/61/c5a64b94b10428f39c915dad987c2e4b1832f8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/61/c5a64b94b10428f39c915dad987c2e4b1832f8'));
	console.log('Got request for /.git/objects/61/c5a64b94b10428f39c915dad987c2e4b1832f8 ... ');
});


app.get('/.git/objects/4c/a99fa201b7734538d710322183c62e68405a02', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/4c/a99fa201b7734538d710322183c62e68405a02'));
	console.log('Got request for /.git/objects/4c/a99fa201b7734538d710322183c62e68405a02 ... ');
});


app.get('/.git/objects/b8/b8020487120ffec588835dd19212c3d9cad6a6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b8/b8020487120ffec588835dd19212c3d9cad6a6'));
	console.log('Got request for /.git/objects/b8/b8020487120ffec588835dd19212c3d9cad6a6 ... ');
});


app.get('/.git/objects/b8/b56a012526ba00d5899d467727d80430ccbd8f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b8/b56a012526ba00d5899d467727d80430ccbd8f'));
	console.log('Got request for /.git/objects/b8/b56a012526ba00d5899d467727d80430ccbd8f ... ');
});


app.get('/.git/objects/c3/197ef59b28c298ef1c506ddfe30ab05bf4ba4d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c3/197ef59b28c298ef1c506ddfe30ab05bf4ba4d'));
	console.log('Got request for /.git/objects/c3/197ef59b28c298ef1c506ddfe30ab05bf4ba4d ... ');
});


app.get('/.git/objects/2a/e9b8419e4b391e72625075d8fe6973f8688ccd', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2a/e9b8419e4b391e72625075d8fe6973f8688ccd'));
	console.log('Got request for /.git/objects/2a/e9b8419e4b391e72625075d8fe6973f8688ccd ... ');
});


app.get('/.git/objects/2a/98908233b787bff6e89f8203561f8365a901c6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2a/98908233b787bff6e89f8203561f8365a901c6'));
	console.log('Got request for /.git/objects/2a/98908233b787bff6e89f8203561f8365a901c6 ... ');
});


app.get('/.git/objects/2a/011a4be693594abf05f693136157a0a6a50874', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2a/011a4be693594abf05f693136157a0a6a50874'));
	console.log('Got request for /.git/objects/2a/011a4be693594abf05f693136157a0a6a50874 ... ');
});


app.get('/.git/objects/6a/d156792e89a3980adee20dae968d74a68751ff', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/6a/d156792e89a3980adee20dae968d74a68751ff'));
	console.log('Got request for /.git/objects/6a/d156792e89a3980adee20dae968d74a68751ff ... ');
});


app.get('/.git/objects/86/b184136c93a56f779115d3f52a1ddabcb68f4b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/86/b184136c93a56f779115d3f52a1ddabcb68f4b'));
	console.log('Got request for /.git/objects/86/b184136c93a56f779115d3f52a1ddabcb68f4b ... ');
});


app.get('/.git/objects/86/607542b19fe35e221212cb94d45a5fd6cabc19', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/86/607542b19fe35e221212cb94d45a5fd6cabc19'));
	console.log('Got request for /.git/objects/86/607542b19fe35e221212cb94d45a5fd6cabc19 ... ');
});


app.get('/.git/objects/74/965e551a18fcc4c0d720e563d865560c7fba95', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/74/965e551a18fcc4c0d720e563d865560c7fba95'));
	console.log('Got request for /.git/objects/74/965e551a18fcc4c0d720e563d865560c7fba95 ... ');
});


app.get('/.git/objects/74/5ae448e235e1cf27ec3e401644313d61819884', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/74/5ae448e235e1cf27ec3e401644313d61819884'));
	console.log('Got request for /.git/objects/74/5ae448e235e1cf27ec3e401644313d61819884 ... ');
});


app.get('/.git/objects/74/ada45d1637b774444eb37e61a8133b2d149979', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/74/ada45d1637b774444eb37e61a8133b2d149979'));
	console.log('Got request for /.git/objects/74/ada45d1637b774444eb37e61a8133b2d149979 ... ');
});


app.get('/.git/objects/74/eb425e4bd3935f8c29cee26261258dc755ef34', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/74/eb425e4bd3935f8c29cee26261258dc755ef34'));
	console.log('Got request for /.git/objects/74/eb425e4bd3935f8c29cee26261258dc755ef34 ... ');
});


app.get('/.git/objects/74/ade5373214edd9918600205e1c864caaa045e4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/74/ade5373214edd9918600205e1c864caaa045e4'));
	console.log('Got request for /.git/objects/74/ade5373214edd9918600205e1c864caaa045e4 ... ');
});


app.get('/.git/objects/74/3e379e13f16dd3d167fd43c88bf49357600a87', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/74/3e379e13f16dd3d167fd43c88bf49357600a87'));
	console.log('Got request for /.git/objects/74/3e379e13f16dd3d167fd43c88bf49357600a87 ... ');
});


app.get('/.git/objects/55/b867b4d434263049ed7a3cbcf78762861b10e8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/55/b867b4d434263049ed7a3cbcf78762861b10e8'));
	console.log('Got request for /.git/objects/55/b867b4d434263049ed7a3cbcf78762861b10e8 ... ');
});


app.get('/.git/objects/55/e4114992da8b60e8d890678d2c2021a54beae2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/55/e4114992da8b60e8d890678d2c2021a54beae2'));
	console.log('Got request for /.git/objects/55/e4114992da8b60e8d890678d2c2021a54beae2 ... ');
});


app.get('/.git/objects/7b/91a56fcb4b938b563305efd90e332f21e39fe1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7b/91a56fcb4b938b563305efd90e332f21e39fe1'));
	console.log('Got request for /.git/objects/7b/91a56fcb4b938b563305efd90e332f21e39fe1 ... ');
});


app.get('/.git/objects/7b/f9b41bbbd68b26a38f8edc9f041063edbcbaff', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7b/f9b41bbbd68b26a38f8edc9f041063edbcbaff'));
	console.log('Got request for /.git/objects/7b/f9b41bbbd68b26a38f8edc9f041063edbcbaff ... ');
});


app.get('/.git/objects/8e/48227cb6f25583baba9f897d2fba5e4f4f64a2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8e/48227cb6f25583baba9f897d2fba5e4f4f64a2'));
	console.log('Got request for /.git/objects/8e/48227cb6f25583baba9f897d2fba5e4f4f64a2 ... ');
});


app.get('/.git/objects/8e/1011665ac948216cb0af5a31a3ea055bdf1fe3', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8e/1011665ac948216cb0af5a31a3ea055bdf1fe3'));
	console.log('Got request for /.git/objects/8e/1011665ac948216cb0af5a31a3ea055bdf1fe3 ... ');
});


app.get('/.git/objects/87/f9793e329840b4a02986b10da71c06e53aa641', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/87/f9793e329840b4a02986b10da71c06e53aa641'));
	console.log('Got request for /.git/objects/87/f9793e329840b4a02986b10da71c06e53aa641 ... ');
});


app.get('/.git/objects/87/889d7284e68560fbb2bba1e2c09fea101f88cd', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/87/889d7284e68560fbb2bba1e2c09fea101f88cd'));
	console.log('Got request for /.git/objects/87/889d7284e68560fbb2bba1e2c09fea101f88cd ... ');
});


app.get('/.git/objects/50/e395801d6348cfe7e4a04d28eac7e26185c314', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/50/e395801d6348cfe7e4a04d28eac7e26185c314'));
	console.log('Got request for /.git/objects/50/e395801d6348cfe7e4a04d28eac7e26185c314 ... ');
});


app.get('/.git/objects/59/f3824b178566ce829b8f754dc5c7fefc3ffe4d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/59/f3824b178566ce829b8f754dc5c7fefc3ffe4d'));
	console.log('Got request for /.git/objects/59/f3824b178566ce829b8f754dc5c7fefc3ffe4d ... ');
});


app.get('/.git/objects/59/990a10492675f2e87d5e5df17b566d145d9aee', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/59/990a10492675f2e87d5e5df17b566d145d9aee'));
	console.log('Got request for /.git/objects/59/990a10492675f2e87d5e5df17b566d145d9aee ... ');
});


app.get('/.git/objects/59/8c6574c3fe3bca107db5528b771d990bea4702', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/59/8c6574c3fe3bca107db5528b771d990bea4702'));
	console.log('Got request for /.git/objects/59/8c6574c3fe3bca107db5528b771d990bea4702 ... ');
});


app.get('/.git/objects/db/b6c714496d630938d6029b6b27cf8ad88c52f2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/db/b6c714496d630938d6029b6b27cf8ad88c52f2'));
	console.log('Got request for /.git/objects/db/b6c714496d630938d6029b6b27cf8ad88c52f2 ... ');
});


app.get('/.git/objects/db/624bca4c682d38e5a12fe841a9a9baa99115c8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/db/624bca4c682d38e5a12fe841a9a9baa99115c8'));
	console.log('Got request for /.git/objects/db/624bca4c682d38e5a12fe841a9a9baa99115c8 ... ');
});


app.get('/.git/objects/db/2621108173d29d74d1d17bf43148e6decaf799', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/db/2621108173d29d74d1d17bf43148e6decaf799'));
	console.log('Got request for /.git/objects/db/2621108173d29d74d1d17bf43148e6decaf799 ... ');
});


app.get('/.git/objects/46/9c6d10a1634c20f14bd1a9c903e1b2bfa8a463', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/46/9c6d10a1634c20f14bd1a9c903e1b2bfa8a463'));
	console.log('Got request for /.git/objects/46/9c6d10a1634c20f14bd1a9c903e1b2bfa8a463 ... ');
});


app.get('/.git/objects/56/ec6fc1b0ddf7003fa0cc4b01bd6da93d8a55a5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/56/ec6fc1b0ddf7003fa0cc4b01bd6da93d8a55a5'));
	console.log('Got request for /.git/objects/56/ec6fc1b0ddf7003fa0cc4b01bd6da93d8a55a5 ... ');
});


app.get('/.git/objects/56/a5943237b5c2b29fbc8c8464cf76ae88f4fd61', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/56/a5943237b5c2b29fbc8c8464cf76ae88f4fd61'));
	console.log('Got request for /.git/objects/56/a5943237b5c2b29fbc8c8464cf76ae88f4fd61 ... ');
});


app.get('/.git/objects/6c/87441619a28a76a0bb15e20d5421a420d86cca', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/6c/87441619a28a76a0bb15e20d5421a420d86cca'));
	console.log('Got request for /.git/objects/6c/87441619a28a76a0bb15e20d5421a420d86cca ... ');
});


app.get('/.git/objects/6c/5f210a8458fe5d60c612195abcf9e22ea8db57', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/6c/5f210a8458fe5d60c612195abcf9e22ea8db57'));
	console.log('Got request for /.git/objects/6c/5f210a8458fe5d60c612195abcf9e22ea8db57 ... ');
});


app.get('/.git/objects/10/f79231f0714d1ef1f22d1c1bbb12d4e733daf0', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/10/f79231f0714d1ef1f22d1c1bbb12d4e733daf0'));
	console.log('Got request for /.git/objects/10/f79231f0714d1ef1f22d1c1bbb12d4e733daf0 ... ');
});


app.get('/.git/objects/10/8dd5cdec40f07a329abc7ee32744a0ccdb63be', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/10/8dd5cdec40f07a329abc7ee32744a0ccdb63be'));
	console.log('Got request for /.git/objects/10/8dd5cdec40f07a329abc7ee32744a0ccdb63be ... ');
});


app.get('/.git/objects/10/ce1f930f252a0a587ad010edb140339db41f25', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/10/ce1f930f252a0a587ad010edb140339db41f25'));
	console.log('Got request for /.git/objects/10/ce1f930f252a0a587ad010edb140339db41f25 ... ');
});


app.get('/.git/objects/0c/956c24bc7a9e58cd0583e5ad694c9917c37be9', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/0c/956c24bc7a9e58cd0583e5ad694c9917c37be9'));
	console.log('Got request for /.git/objects/0c/956c24bc7a9e58cd0583e5ad694c9917c37be9 ... ');
});


app.get('/.git/objects/3e/a25f59d2a00f832923926eea639e8042ee0d0e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/3e/a25f59d2a00f832923926eea639e8042ee0d0e'));
	console.log('Got request for /.git/objects/3e/a25f59d2a00f832923926eea639e8042ee0d0e ... ');
});


app.get('/.git/objects/f3/3003228a7b042a64334af52b1c3845465654b1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f3/3003228a7b042a64334af52b1c3845465654b1'));
	console.log('Got request for /.git/objects/f3/3003228a7b042a64334af52b1c3845465654b1 ... ');
});


app.get('/.git/objects/f3/bc734b1009ea505b65d8f39cc7c27f5d09bf56', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f3/bc734b1009ea505b65d8f39cc7c27f5d09bf56'));
	console.log('Got request for /.git/objects/f3/bc734b1009ea505b65d8f39cc7c27f5d09bf56 ... ');
});


app.get('/.git/objects/13/118b2952198a8ef7743d978c3b24bde465ddb1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/13/118b2952198a8ef7743d978c3b24bde465ddb1'));
	console.log('Got request for /.git/objects/13/118b2952198a8ef7743d978c3b24bde465ddb1 ... ');
});


app.get('/.git/objects/3a/67bedae970feb47bc81f23336297e23bd373bc', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/3a/67bedae970feb47bc81f23336297e23bd373bc'));
	console.log('Got request for /.git/objects/3a/67bedae970feb47bc81f23336297e23bd373bc ... ');
});


app.get('/.git/objects/3a/13628677b14083d3f2046fa46e2c64bb581a2a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/3a/13628677b14083d3f2046fa46e2c64bb581a2a'));
	console.log('Got request for /.git/objects/3a/13628677b14083d3f2046fa46e2c64bb581a2a ... ');
});


app.get('/.git/objects/3a/afbcac1fea1327c332c634a14a52373d227233', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/3a/afbcac1fea1327c332c634a14a52373d227233'));
	console.log('Got request for /.git/objects/3a/afbcac1fea1327c332c634a14a52373d227233 ... ');
});


app.get('/.git/objects/f8/004eee25c5a9a4073185a0ae7c02f9c1688941', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f8/004eee25c5a9a4073185a0ae7c02f9c1688941'));
	console.log('Got request for /.git/objects/f8/004eee25c5a9a4073185a0ae7c02f9c1688941 ... ');
});


app.get('/.git/objects/e5/f1ac7b6d4227c33258af1b924aed77ff4f37a4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e5/f1ac7b6d4227c33258af1b924aed77ff4f37a4'));
	console.log('Got request for /.git/objects/e5/f1ac7b6d4227c33258af1b924aed77ff4f37a4 ... ');
});


app.get('/.git/objects/43/d069ce2c043e9ba211a45030d4e67f1e86ec4a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/43/d069ce2c043e9ba211a45030d4e67f1e86ec4a'));
	console.log('Got request for /.git/objects/43/d069ce2c043e9ba211a45030d4e67f1e86ec4a ... ');
});


app.get('/.git/objects/6f/c21888f727de25be81689dd52291e75d1e3234', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/6f/c21888f727de25be81689dd52291e75d1e3234'));
	console.log('Got request for /.git/objects/6f/c21888f727de25be81689dd52291e75d1e3234 ... ');
});


app.get('/.git/objects/6f/9e8319a4eabc8586e37821ab8d55c47da4539e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/6f/9e8319a4eabc8586e37821ab8d55c47da4539e'));
	console.log('Got request for /.git/objects/6f/9e8319a4eabc8586e37821ab8d55c47da4539e ... ');
});


app.get('/.git/objects/28/5416cc8d8fe7af838e840d32f5e4ff03c197df', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/28/5416cc8d8fe7af838e840d32f5e4ff03c197df'));
	console.log('Got request for /.git/objects/28/5416cc8d8fe7af838e840d32f5e4ff03c197df ... ');
});


app.get('/.git/objects/28/fdcf6b04bb6b060e854c2cb361b45baf5956b5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/28/fdcf6b04bb6b060e854c2cb361b45baf5956b5'));
	console.log('Got request for /.git/objects/28/fdcf6b04bb6b060e854c2cb361b45baf5956b5 ... ');
});


app.get('/.git/objects/28/e25610011aa22d8fbe346224f78564818f1594', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/28/e25610011aa22d8fbe346224f78564818f1594'));
	console.log('Got request for /.git/objects/28/e25610011aa22d8fbe346224f78564818f1594 ... ');
});


app.get('/.git/objects/81/bf6e78ef303689f16024c4cdde1c7a80d58045', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/81/bf6e78ef303689f16024c4cdde1c7a80d58045'));
	console.log('Got request for /.git/objects/81/bf6e78ef303689f16024c4cdde1c7a80d58045 ... ');
});


app.get('/.git/objects/81/376d3e3284c97a6e6b523143e519e1671b8729', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/81/376d3e3284c97a6e6b523143e519e1671b8729'));
	console.log('Got request for /.git/objects/81/376d3e3284c97a6e6b523143e519e1671b8729 ... ');
});


app.get('/.git/objects/93/e2b58fdff59aeea28c634d18d1ba17ec4ed32e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/93/e2b58fdff59aeea28c634d18d1ba17ec4ed32e'));
	console.log('Got request for /.git/objects/93/e2b58fdff59aeea28c634d18d1ba17ec4ed32e ... ');
});


app.get('/.git/objects/12/f47058ce678307d8054796e39a50aa4cb42368', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/12/f47058ce678307d8054796e39a50aa4cb42368'));
	console.log('Got request for /.git/objects/12/f47058ce678307d8054796e39a50aa4cb42368 ... ');
});


app.get('/.git/objects/12/e9dd5eeb224031bf53fafff7790bc7d2e8f047', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/12/e9dd5eeb224031bf53fafff7790bc7d2e8f047'));
	console.log('Got request for /.git/objects/12/e9dd5eeb224031bf53fafff7790bc7d2e8f047 ... ');
});


app.get('/.git/objects/07/6d7b4d165361309b978851008198a789c1653e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/07/6d7b4d165361309b978851008198a789c1653e'));
	console.log('Got request for /.git/objects/07/6d7b4d165361309b978851008198a789c1653e ... ');
});


app.get('/.git/objects/07/439fcc0b42ffe46ed2cc9825ca12106eb776a0', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/07/439fcc0b42ffe46ed2cc9825ca12106eb776a0'));
	console.log('Got request for /.git/objects/07/439fcc0b42ffe46ed2cc9825ca12106eb776a0 ... ');
});


app.get('/.git/objects/d6/802147b498dd0c413e9fcf106b3982388ed61a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d6/802147b498dd0c413e9fcf106b3982388ed61a'));
	console.log('Got request for /.git/objects/d6/802147b498dd0c413e9fcf106b3982388ed61a ... ');
});


app.get('/.git/objects/d6/2670240b167462d12639bc2ade7c3e4592c8a5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d6/2670240b167462d12639bc2ade7c3e4592c8a5'));
	console.log('Got request for /.git/objects/d6/2670240b167462d12639bc2ade7c3e4592c8a5 ... ');
});


app.get('/.git/objects/d6/5b5830353c8da7ff294addcd334cdbee7282a9', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d6/5b5830353c8da7ff294addcd334cdbee7282a9'));
	console.log('Got request for /.git/objects/d6/5b5830353c8da7ff294addcd334cdbee7282a9 ... ');
});


app.get('/.git/objects/83/becd4f68f08cb01806a83529f8c1928bd3eea3', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/83/becd4f68f08cb01806a83529f8c1928bd3eea3'));
	console.log('Got request for /.git/objects/83/becd4f68f08cb01806a83529f8c1928bd3eea3 ... ');
});


app.get('/.git/objects/02/52ccbae039fa68fa2851ea16e6ab88113caca4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/02/52ccbae039fa68fa2851ea16e6ab88113caca4'));
	console.log('Got request for /.git/objects/02/52ccbae039fa68fa2851ea16e6ab88113caca4 ... ');
});


app.get('/.git/objects/02/baeae90781b497736a41c861057a5821e20613', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/02/baeae90781b497736a41c861057a5821e20613'));
	console.log('Got request for /.git/objects/02/baeae90781b497736a41c861057a5821e20613 ... ');
});


app.get('/.git/objects/02/d50be363a276745f0925d07992a5c83e4a56be', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/02/d50be363a276745f0925d07992a5c83e4a56be'));
	console.log('Got request for /.git/objects/02/d50be363a276745f0925d07992a5c83e4a56be ... ');
});


app.get('/.git/objects/89/928dad9be6f24587b428f172961f473b6b91d3', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/89/928dad9be6f24587b428f172961f473b6b91d3'));
	console.log('Got request for /.git/objects/89/928dad9be6f24587b428f172961f473b6b91d3 ... ');
});


app.get('/.git/objects/89/a4174f22bc4d4e18151e57c41cddb46c681e84', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/89/a4174f22bc4d4e18151e57c41cddb46c681e84'));
	console.log('Got request for /.git/objects/89/a4174f22bc4d4e18151e57c41cddb46c681e84 ... ');
});


app.get('/.git/objects/d3/340f97dbd80424673590a3028303fada25b640', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d3/340f97dbd80424673590a3028303fada25b640'));
	console.log('Got request for /.git/objects/d3/340f97dbd80424673590a3028303fada25b640 ... ');
});


app.get('/.git/objects/d3/025f101f1b97e3134b85271664af2b9fce531a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d3/025f101f1b97e3134b85271664af2b9fce531a'));
	console.log('Got request for /.git/objects/d3/025f101f1b97e3134b85271664af2b9fce531a ... ');
});


app.get('/.git/objects/d3/326fe1ba9c40c983cb212456066cfd877c1365', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d3/326fe1ba9c40c983cb212456066cfd877c1365'));
	console.log('Got request for /.git/objects/d3/326fe1ba9c40c983cb212456066cfd877c1365 ... ');
});


app.get('/.git/objects/17/11a513fcaa8aad5b30c584eabbf12180c03707', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/17/11a513fcaa8aad5b30c584eabbf12180c03707'));
	console.log('Got request for /.git/objects/17/11a513fcaa8aad5b30c584eabbf12180c03707 ... ');
});


app.get('/.git/objects/17/872bda6ef8d5238cc3c297cc8689818a1d2912', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/17/872bda6ef8d5238cc3c297cc8689818a1d2912'));
	console.log('Got request for /.git/objects/17/872bda6ef8d5238cc3c297cc8689818a1d2912 ... ');
});


app.get('/.git/objects/17/7c8966fc6524d705cc8a8025cf742c2bc7086a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/17/7c8966fc6524d705cc8a8025cf742c2bc7086a'));
	console.log('Got request for /.git/objects/17/7c8966fc6524d705cc8a8025cf742c2bc7086a ... ');
});


app.get('/.git/objects/17/aeca1f9b7a46f40f535ccc2643bdf1b42733f2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/17/aeca1f9b7a46f40f535ccc2643bdf1b42733f2'));
	console.log('Got request for /.git/objects/17/aeca1f9b7a46f40f535ccc2643bdf1b42733f2 ... ');
});


app.get('/.git/objects/92/9306ba5b49dfdb970469ae87d42a06f7cc4505', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/92/9306ba5b49dfdb970469ae87d42a06f7cc4505'));
	console.log('Got request for /.git/objects/92/9306ba5b49dfdb970469ae87d42a06f7cc4505 ... ');
});


app.get('/.git/objects/09/5ce722f0ddff157113095dd5cd60e1e73e69de', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/09/5ce722f0ddff157113095dd5cd60e1e73e69de'));
	console.log('Got request for /.git/objects/09/5ce722f0ddff157113095dd5cd60e1e73e69de ... ');
});


app.get('/.git/objects/09/4ae0905df564de6636a58df710acccdea2a133', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/09/4ae0905df564de6636a58df710acccdea2a133'));
	console.log('Got request for /.git/objects/09/4ae0905df564de6636a58df710acccdea2a133 ... ');
});


app.get('/.git/objects/ff/2dd8463429a22a44eff88eb734940ec8001271', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ff/2dd8463429a22a44eff88eb734940ec8001271'));
	console.log('Got request for /.git/objects/ff/2dd8463429a22a44eff88eb734940ec8001271 ... ');
});


app.get('/.git/objects/ff/158b4a6d57f64f0e0e5eb71e434d138ae9f7ab', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ff/158b4a6d57f64f0e0e5eb71e434d138ae9f7ab'));
	console.log('Got request for /.git/objects/ff/158b4a6d57f64f0e0e5eb71e434d138ae9f7ab ... ');
});


app.get('/.git/objects/c8/b6f3ecd07e97365060d27a56b1fa6a3952863f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c8/b6f3ecd07e97365060d27a56b1fa6a3952863f'));
	console.log('Got request for /.git/objects/c8/b6f3ecd07e97365060d27a56b1fa6a3952863f ... ');
});


app.get('/.git/objects/21/f3737eb7af6f8de8890999f81537a59caffc36', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/21/f3737eb7af6f8de8890999f81537a59caffc36'));
	console.log('Got request for /.git/objects/21/f3737eb7af6f8de8890999f81537a59caffc36 ... ');
});


app.get('/.git/objects/03/87df212733a7e1070ada40cb0e93461b840490', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/03/87df212733a7e1070ada40cb0e93461b840490'));
	console.log('Got request for /.git/objects/03/87df212733a7e1070ada40cb0e93461b840490 ... ');
});


app.get('/.git/objects/03/31d6340002b0098e6455ab8fe8d17333799caa', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/03/31d6340002b0098e6455ab8fe8d17333799caa'));
	console.log('Got request for /.git/objects/03/31d6340002b0098e6455ab8fe8d17333799caa ... ');
});


app.get('/.git/objects/e8/56d6b92f9c2cca9d154570be48ffccdccc4979', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e8/56d6b92f9c2cca9d154570be48ffccdccc4979'));
	console.log('Got request for /.git/objects/e8/56d6b92f9c2cca9d154570be48ffccdccc4979 ... ');
});


app.get('/.git/objects/e8/2b908d48f59ccb0612ca9357f47b485f694128', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e8/2b908d48f59ccb0612ca9357f47b485f694128'));
	console.log('Got request for /.git/objects/e8/2b908d48f59ccb0612ca9357f47b485f694128 ... ');
});


app.get('/.git/objects/37/58c5430e1070e23412fc32719804cbe439cd19', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/37/58c5430e1070e23412fc32719804cbe439cd19'));
	console.log('Got request for /.git/objects/37/58c5430e1070e23412fc32719804cbe439cd19 ... ');
});


app.get('/.git/objects/27/916d276ae946c048328a754a580081c94bc37f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/27/916d276ae946c048328a754a580081c94bc37f'));
	console.log('Got request for /.git/objects/27/916d276ae946c048328a754a580081c94bc37f ... ');
});


app.get('/.git/objects/27/3dedf7a05fc5f922f3382d8f0dc2c758d4d726', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/27/3dedf7a05fc5f922f3382d8f0dc2c758d4d726'));
	console.log('Got request for /.git/objects/27/3dedf7a05fc5f922f3382d8f0dc2c758d4d726 ... ');
});


app.get('/.git/objects/1f/9d071d3caf079a2c95cb2a61ed41ec7a81349c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1f/9d071d3caf079a2c95cb2a61ed41ec7a81349c'));
	console.log('Got request for /.git/objects/1f/9d071d3caf079a2c95cb2a61ed41ec7a81349c ... ');
});


app.get('/.git/objects/f1/1e1e3d8575683ae4f5cf2335f7ad9f3530146c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f1/1e1e3d8575683ae4f5cf2335f7ad9f3530146c'));
	console.log('Got request for /.git/objects/f1/1e1e3d8575683ae4f5cf2335f7ad9f3530146c ... ');
});


app.get('/.git/objects/d7/58e02d6fbbd14d1b069d5a053f08c28fe9e859', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d7/58e02d6fbbd14d1b069d5a053f08c28fe9e859'));
	console.log('Got request for /.git/objects/d7/58e02d6fbbd14d1b069d5a053f08c28fe9e859 ... ');
});


app.get('/.git/objects/d7/5243af3133820208ca6f94c8f4aa2f6446ba8f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d7/5243af3133820208ca6f94c8f4aa2f6446ba8f'));
	console.log('Got request for /.git/objects/d7/5243af3133820208ca6f94c8f4aa2f6446ba8f ... ');
});


app.get('/.git/objects/d7/e584fc79f51240922ad48fe281b80b222db223', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d7/e584fc79f51240922ad48fe281b80b222db223'));
	console.log('Got request for /.git/objects/d7/e584fc79f51240922ad48fe281b80b222db223 ... ');
});


app.get('/.git/objects/c9/b149c2efe2590a7ee96b642eb0041ab19eb14b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c9/b149c2efe2590a7ee96b642eb0041ab19eb14b'));
	console.log('Got request for /.git/objects/c9/b149c2efe2590a7ee96b642eb0041ab19eb14b ... ');
});


app.get('/.git/objects/c9/126523030b5df1983d2a07a1deaa5eb4612413', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c9/126523030b5df1983d2a07a1deaa5eb4612413'));
	console.log('Got request for /.git/objects/c9/126523030b5df1983d2a07a1deaa5eb4612413 ... ');
});


app.get('/.git/objects/2f/baa299f6fa56a0956f8c6eca35ecf0bb592012', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2f/baa299f6fa56a0956f8c6eca35ecf0bb592012'));
	console.log('Got request for /.git/objects/2f/baa299f6fa56a0956f8c6eca35ecf0bb592012 ... ');
});


app.get('/.git/objects/2f/140ec0e0648aa51ca7429dcb67f9d539754e6d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2f/140ec0e0648aa51ca7429dcb67f9d539754e6d'));
	console.log('Got request for /.git/objects/2f/140ec0e0648aa51ca7429dcb67f9d539754e6d ... ');
});


app.get('/.git/objects/2f/d684c576af2ebd8710ed603fb950b164a36072', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2f/d684c576af2ebd8710ed603fb950b164a36072'));
	console.log('Got request for /.git/objects/2f/d684c576af2ebd8710ed603fb950b164a36072 ... ');
});


app.get('/.git/objects/2f/0df54a3361f99078d81acda1c7bb1305ae7db1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2f/0df54a3361f99078d81acda1c7bb1305ae7db1'));
	console.log('Got request for /.git/objects/2f/0df54a3361f99078d81acda1c7bb1305ae7db1 ... ');
});


app.get('/.git/objects/6b/0ef942d5875a313af0de8d6aba9fca7bd234e6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/6b/0ef942d5875a313af0de8d6aba9fca7bd234e6'));
	console.log('Got request for /.git/objects/6b/0ef942d5875a313af0de8d6aba9fca7bd234e6 ... ');
});


app.get('/.git/objects/ac/480c973031edbf639e1459df91e2a45c7fa34d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ac/480c973031edbf639e1459df91e2a45c7fa34d'));
	console.log('Got request for /.git/objects/ac/480c973031edbf639e1459df91e2a45c7fa34d ... ');
});


app.get('/.git/objects/ac/d616559287bc7cc8de6cc0ea1f82a05f81d69f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ac/d616559287bc7cc8de6cc0ea1f82a05f81d69f'));
	console.log('Got request for /.git/objects/ac/d616559287bc7cc8de6cc0ea1f82a05f81d69f ... ');
});


app.get('/.git/objects/ac/bbc91c35d56d1cd72406006e17c1c477f51212', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ac/bbc91c35d56d1cd72406006e17c1c477f51212'));
	console.log('Got request for /.git/objects/ac/bbc91c35d56d1cd72406006e17c1c477f51212 ... ');
});


app.get('/.git/objects/d5/e877947a6a3f710f6296a3ee42ed9d530c0898', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d5/e877947a6a3f710f6296a3ee42ed9d530c0898'));
	console.log('Got request for /.git/objects/d5/e877947a6a3f710f6296a3ee42ed9d530c0898 ... ');
});


app.get('/.git/objects/d5/998f3dd60256506851f8d86233e95ef2281c58', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d5/998f3dd60256506851f8d86233e95ef2281c58'));
	console.log('Got request for /.git/objects/d5/998f3dd60256506851f8d86233e95ef2281c58 ... ');
});


app.get('/.git/objects/68/c2b022a7f0db2a177c0e24bcd1538fe4597825', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/68/c2b022a7f0db2a177c0e24bcd1538fe4597825'));
	console.log('Got request for /.git/objects/68/c2b022a7f0db2a177c0e24bcd1538fe4597825 ... ');
});


app.get('/.git/objects/1e/ee509b64680c4aff219ddc14aed14101460b31', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1e/ee509b64680c4aff219ddc14aed14101460b31'));
	console.log('Got request for /.git/objects/1e/ee509b64680c4aff219ddc14aed14101460b31 ... ');
});


app.get('/.git/objects/52/cebd7927ae73b6f7b508f9255fbe69c0bf070b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/52/cebd7927ae73b6f7b508f9255fbe69c0bf070b'));
	console.log('Got request for /.git/objects/52/cebd7927ae73b6f7b508f9255fbe69c0bf070b ... ');
});


app.get('/.git/objects/52/e85061107060f7dec5a64cdbacaf5adc6b7ac6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/52/e85061107060f7dec5a64cdbacaf5adc6b7ac6'));
	console.log('Got request for /.git/objects/52/e85061107060f7dec5a64cdbacaf5adc6b7ac6 ... ');
});


app.get('/.git/objects/69/355d2b7f717b898e78b0cc9c5d1f16fd8879b5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/69/355d2b7f717b898e78b0cc9c5d1f16fd8879b5'));
	console.log('Got request for /.git/objects/69/355d2b7f717b898e78b0cc9c5d1f16fd8879b5 ... ');
});


app.get('/.git/objects/8b/0cfcc9ba1b2a99de30a78dd7b243b04b2986ba', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/8b/0cfcc9ba1b2a99de30a78dd7b243b04b2986ba'));
	console.log('Got request for /.git/objects/8b/0cfcc9ba1b2a99de30a78dd7b243b04b2986ba ... ');
});


app.get('/.git/objects/ed/5adfc55047dfbb101c5d9ba272b3ca0c9abbf5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ed/5adfc55047dfbb101c5d9ba272b3ca0c9abbf5'));
	console.log('Got request for /.git/objects/ed/5adfc55047dfbb101c5d9ba272b3ca0c9abbf5 ... ');
});


app.get('/.git/objects/97/59438f878072e20e7f0457344a5515293fab35', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/97/59438f878072e20e7f0457344a5515293fab35'));
	console.log('Got request for /.git/objects/97/59438f878072e20e7f0457344a5515293fab35 ... ');
});


app.get('/.git/objects/97/ae9401270aa19d73bafb4435a5949b5a1e08f1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/97/ae9401270aa19d73bafb4435a5949b5a1e08f1'));
	console.log('Got request for /.git/objects/97/ae9401270aa19d73bafb4435a5949b5a1e08f1 ... ');
});


app.get('/.git/objects/97/179ca92be01f7677762f04e6c05090ee2c9d04', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/97/179ca92be01f7677762f04e6c05090ee2c9d04'));
	console.log('Got request for /.git/objects/97/179ca92be01f7677762f04e6c05090ee2c9d04 ... ');
});


app.get('/.git/objects/97/d6d822d179d9a20d655a5dfd1c9e4d73ba1079', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/97/d6d822d179d9a20d655a5dfd1c9e4d73ba1079'));
	console.log('Got request for /.git/objects/97/d6d822d179d9a20d655a5dfd1c9e4d73ba1079 ... ');
});


app.get('/.git/objects/97/66390fbc2ea61ebc30f766db1a45faeacb2e18', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/97/66390fbc2ea61ebc30f766db1a45faeacb2e18'));
	console.log('Got request for /.git/objects/97/66390fbc2ea61ebc30f766db1a45faeacb2e18 ... ');
});


app.get('/.git/objects/58/60cf429616e5f7b5bda606e39a48efae5c8232', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/58/60cf429616e5f7b5bda606e39a48efae5c8232'));
	console.log('Got request for /.git/objects/58/60cf429616e5f7b5bda606e39a48efae5c8232 ... ');
});


app.get('/.git/objects/58/35c16b91ae10a44cda99cbc57299173ee0d571', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/58/35c16b91ae10a44cda99cbc57299173ee0d571'));
	console.log('Got request for /.git/objects/58/35c16b91ae10a44cda99cbc57299173ee0d571 ... ');
});


app.get('/.git/objects/58/b5c1fc322bca04f2b10284931e81e216fd8b33', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/58/b5c1fc322bca04f2b10284931e81e216fd8b33'));
	console.log('Got request for /.git/objects/58/b5c1fc322bca04f2b10284931e81e216fd8b33 ... ');
});


app.get('/.git/objects/b3/e200b3207e735113e00131bb9e89b80240f2b2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b3/e200b3207e735113e00131bb9e89b80240f2b2'));
	console.log('Got request for /.git/objects/b3/e200b3207e735113e00131bb9e89b80240f2b2 ... ');
});


app.get('/.git/objects/b3/f814383e31a2271dc456ece95b51d8def9639f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b3/f814383e31a2271dc456ece95b51d8def9639f'));
	console.log('Got request for /.git/objects/b3/f814383e31a2271dc456ece95b51d8def9639f ... ');
});


app.get('/.git/objects/b3/9f98f9ae9f950391abb09f4fa03ee113a07ac6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b3/9f98f9ae9f950391abb09f4fa03ee113a07ac6'));
	console.log('Got request for /.git/objects/b3/9f98f9ae9f950391abb09f4fa03ee113a07ac6 ... ');
});


app.get('/.git/objects/de/6eb9b066e042b47be36eb2e3f7fb18588467d3', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/de/6eb9b066e042b47be36eb2e3f7fb18588467d3'));
	console.log('Got request for /.git/objects/de/6eb9b066e042b47be36eb2e3f7fb18588467d3 ... ');
});


app.get('/.git/objects/de/af8beb9ff869db3875ff3905651d5df6840815', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/de/af8beb9ff869db3875ff3905651d5df6840815'));
	console.log('Got request for /.git/objects/de/af8beb9ff869db3875ff3905651d5df6840815 ... ');
});


app.get('/.git/objects/de/e048e75e5f0fe8bf182d5cbd8729e5b6052172', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/de/e048e75e5f0fe8bf182d5cbd8729e5b6052172'));
	console.log('Got request for /.git/objects/de/e048e75e5f0fe8bf182d5cbd8729e5b6052172 ... ');
});


app.get('/.git/objects/eb/29814bca374a9163b7d7311019c1fe475d98ec', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/eb/29814bca374a9163b7d7311019c1fe475d98ec'));
	console.log('Got request for /.git/objects/eb/29814bca374a9163b7d7311019c1fe475d98ec ... ');
});


app.get('/.git/objects/cc/b5413c4cceb0fb73e13d432fef6f72212074f7', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/cc/b5413c4cceb0fb73e13d432fef6f72212074f7'));
	console.log('Got request for /.git/objects/cc/b5413c4cceb0fb73e13d432fef6f72212074f7 ... ');
});


app.get('/.git/objects/60/4044af81114a02505793f03b62f05637ff01c7', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/60/4044af81114a02505793f03b62f05637ff01c7'));
	console.log('Got request for /.git/objects/60/4044af81114a02505793f03b62f05637ff01c7 ... ');
});


app.get('/.git/objects/06/d53528f768078f35216233eb351eb51fef5eea', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/06/d53528f768078f35216233eb351eb51fef5eea'));
	console.log('Got request for /.git/objects/06/d53528f768078f35216233eb351eb51fef5eea ... ');
});


app.get('/.git/objects/6d/b4d797fc85da30c73db5434e54f8cf03aadc3f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/6d/b4d797fc85da30c73db5434e54f8cf03aadc3f'));
	console.log('Got request for /.git/objects/6d/b4d797fc85da30c73db5434e54f8cf03aadc3f ... ');
});


app.get('/.git/objects/99/5975ce72c5c13fd49feadb2f84659ff823cdf9', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/99/5975ce72c5c13fd49feadb2f84659ff823cdf9'));
	console.log('Got request for /.git/objects/99/5975ce72c5c13fd49feadb2f84659ff823cdf9 ... ');
});


app.get('/.git/objects/c5/deb4a4429be5cd720674d3a30c60f668eeabcf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c5/deb4a4429be5cd720674d3a30c60f668eeabcf'));
	console.log('Got request for /.git/objects/c5/deb4a4429be5cd720674d3a30c60f668eeabcf ... ');
});


app.get('/.git/objects/c5/eb05b0ef77d1a58cf5b47267b0668ee6bdc2f9', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c5/eb05b0ef77d1a58cf5b47267b0668ee6bdc2f9'));
	console.log('Got request for /.git/objects/c5/eb05b0ef77d1a58cf5b47267b0668ee6bdc2f9 ... ');
});


app.get('/.git/objects/c5/7103d3e2c51fb854f29f2d73f00630beff703e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c5/7103d3e2c51fb854f29f2d73f00630beff703e'));
	console.log('Got request for /.git/objects/c5/7103d3e2c51fb854f29f2d73f00630beff703e ... ');
});


app.get('/.git/objects/c5/f682bf7aca922ba0ffda988f33474c313f7149', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/c5/f682bf7aca922ba0ffda988f33474c313f7149'));
	console.log('Got request for /.git/objects/c5/f682bf7aca922ba0ffda988f33474c313f7149 ... ');
});


app.get('/.git/objects/9e/4f6b88ce6685a0d48351ac17bbf2342e3468dd', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9e/4f6b88ce6685a0d48351ac17bbf2342e3468dd'));
	console.log('Got request for /.git/objects/9e/4f6b88ce6685a0d48351ac17bbf2342e3468dd ... ');
});


app.get('/.git/objects/9e/d40b1da9aff81cd80e62674b1333127c398748', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9e/d40b1da9aff81cd80e62674b1333127c398748'));
	console.log('Got request for /.git/objects/9e/d40b1da9aff81cd80e62674b1333127c398748 ... ');
});


app.get('/.git/objects/40/737e520450db6518366b836d66e4007e15c968', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/40/737e520450db6518366b836d66e4007e15c968'));
	console.log('Got request for /.git/objects/40/737e520450db6518366b836d66e4007e15c968 ... ');
});


app.get('/.git/objects/40/5d8e21e70a3b3ed089212f8e46ee0118546fd5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/40/5d8e21e70a3b3ed089212f8e46ee0118546fd5'));
	console.log('Got request for /.git/objects/40/5d8e21e70a3b3ed089212f8e46ee0118546fd5 ... ');
});


app.get('/.git/objects/40/26c64f7164406223a857daa58744a8c125cdd3', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/40/26c64f7164406223a857daa58744a8c125cdd3'));
	console.log('Got request for /.git/objects/40/26c64f7164406223a857daa58744a8c125cdd3 ... ');
});


app.get('/.git/objects/40/69fee8783419d262966b0676b3403863c9d192', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/40/69fee8783419d262966b0676b3403863c9d192'));
	console.log('Got request for /.git/objects/40/69fee8783419d262966b0676b3403863c9d192 ... ');
});


app.get('/.git/objects/11/f72a3303882c1cd56f10c6a5deae92f3a0e94a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/11/f72a3303882c1cd56f10c6a5deae92f3a0e94a'));
	console.log('Got request for /.git/objects/11/f72a3303882c1cd56f10c6a5deae92f3a0e94a ... ');
});


app.get('/.git/objects/11/2c287b67e14176673e7f46463c3c0aed03e0a6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/11/2c287b67e14176673e7f46463c3c0aed03e0a6'));
	console.log('Got request for /.git/objects/11/2c287b67e14176673e7f46463c3c0aed03e0a6 ... ');
});


app.get('/.git/objects/11/bb5798b0e28bbe1e47e08a457af00d2b2a5ea4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/11/bb5798b0e28bbe1e47e08a457af00d2b2a5ea4'));
	console.log('Got request for /.git/objects/11/bb5798b0e28bbe1e47e08a457af00d2b2a5ea4 ... ');
});


app.get('/.git/objects/11/a88baaa0722eb085caf8568956aa0224a787d2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/11/a88baaa0722eb085caf8568956aa0224a787d2'));
	console.log('Got request for /.git/objects/11/a88baaa0722eb085caf8568956aa0224a787d2 ... ');
});


app.get('/.git/objects/35/6b9eae6b81db4d5f31ff75de418e82ba746d96', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/35/6b9eae6b81db4d5f31ff75de418e82ba746d96'));
	console.log('Got request for /.git/objects/35/6b9eae6b81db4d5f31ff75de418e82ba746d96 ... ');
});


app.get('/.git/objects/51/1da783253f73d76997e2e65eecf6a88a9dea42', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/51/1da783253f73d76997e2e65eecf6a88a9dea42'));
	console.log('Got request for /.git/objects/51/1da783253f73d76997e2e65eecf6a88a9dea42 ... ');
});


app.get('/.git/objects/72/46c29d80cd33c553d6bd988b2d157575b2de92', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/72/46c29d80cd33c553d6bd988b2d157575b2de92'));
	console.log('Got request for /.git/objects/72/46c29d80cd33c553d6bd988b2d157575b2de92 ... ');
});


app.get('/.git/objects/20/9e5440312e942da5a011a60e5b620e9e618291', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/20/9e5440312e942da5a011a60e5b620e9e618291'));
	console.log('Got request for /.git/objects/20/9e5440312e942da5a011a60e5b620e9e618291 ... ');
});


app.get('/.git/objects/5d/00af4e9478e0d427c21062d2a1ea265f396672', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/5d/00af4e9478e0d427c21062d2a1ea265f396672'));
	console.log('Got request for /.git/objects/5d/00af4e9478e0d427c21062d2a1ea265f396672 ... ');
});


app.get('/.git/objects/5d/dd1c532dadf67fc5cd76b9b321bacdf42447b4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/5d/dd1c532dadf67fc5cd76b9b321bacdf42447b4'));
	console.log('Got request for /.git/objects/5d/dd1c532dadf67fc5cd76b9b321bacdf42447b4 ... ');
});


app.get('/.git/objects/e9/513299710adc7b213549df5db7b8641e907f93', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e9/513299710adc7b213549df5db7b8641e907f93'));
	console.log('Got request for /.git/objects/e9/513299710adc7b213549df5db7b8641e907f93 ... ');
});


app.get('/.git/objects/2c/aeac5bbf791906c058fe71d40c279af58f1cf2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2c/aeac5bbf791906c058fe71d40c279af58f1cf2'));
	console.log('Got request for /.git/objects/2c/aeac5bbf791906c058fe71d40c279af58f1cf2 ... ');
});


app.get('/.git/objects/2c/1f3fb8167b0722c9bda9d27ae09ecd1683f81f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2c/1f3fb8167b0722c9bda9d27ae09ecd1683f81f'));
	console.log('Got request for /.git/objects/2c/1f3fb8167b0722c9bda9d27ae09ecd1683f81f ... ');
});


app.get('/.git/objects/08/47a3eabc5c7b36f65e13b810baf52c128c522b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/08/47a3eabc5c7b36f65e13b810baf52c128c522b'));
	console.log('Got request for /.git/objects/08/47a3eabc5c7b36f65e13b810baf52c128c522b ... ');
});


app.get('/.git/objects/08/f119d559690c7b9725c52d373d210b986c60e9', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/08/f119d559690c7b9725c52d373d210b986c60e9'));
	console.log('Got request for /.git/objects/08/f119d559690c7b9725c52d373d210b986c60e9 ... ');
});


app.get('/.git/objects/08/a0cbe5cfd90a8d27431e4e58d49124805687e8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/08/a0cbe5cfd90a8d27431e4e58d49124805687e8'));
	console.log('Got request for /.git/objects/08/a0cbe5cfd90a8d27431e4e58d49124805687e8 ... ');
});


app.get('/.git/objects/e6/da762b209cee0c33311c3cb33dfb5e706cafcb', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e6/da762b209cee0c33311c3cb33dfb5e706cafcb'));
	console.log('Got request for /.git/objects/e6/da762b209cee0c33311c3cb33dfb5e706cafcb ... ');
});


app.get('/.git/objects/e6/549f1b16c739904aecac1e3c961aa1d331a60d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e6/549f1b16c739904aecac1e3c961aa1d331a60d'));
	console.log('Got request for /.git/objects/e6/549f1b16c739904aecac1e3c961aa1d331a60d ... ');
});


app.get('/.git/objects/75/cfa1289a3b95e054cdbe2c170259e433a1e2aa', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/75/cfa1289a3b95e054cdbe2c170259e433a1e2aa'));
	console.log('Got request for /.git/objects/75/cfa1289a3b95e054cdbe2c170259e433a1e2aa ... ');
});


app.get('/.git/objects/75/4fa4b0af5c03cae7e33dff6bd30cacc52c3edc', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/75/4fa4b0af5c03cae7e33dff6bd30cacc52c3edc'));
	console.log('Got request for /.git/objects/75/4fa4b0af5c03cae7e33dff6bd30cacc52c3edc ... ');
});


app.get('/.git/objects/91/ab2f5f47a7f6930e6233f9f18d6fbfdaa31dbf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/91/ab2f5f47a7f6930e6233f9f18d6fbfdaa31dbf'));
	console.log('Got request for /.git/objects/91/ab2f5f47a7f6930e6233f9f18d6fbfdaa31dbf ... ');
});


app.get('/.git/objects/91/8dd6379afdd8458d507073dfb33ad6e87d5630', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/91/8dd6379afdd8458d507073dfb33ad6e87d5630'));
	console.log('Got request for /.git/objects/91/8dd6379afdd8458d507073dfb33ad6e87d5630 ... ');
});


app.get('/.git/objects/91/711d59d9eb6b4d7e87f0013040ba62466048bf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/91/711d59d9eb6b4d7e87f0013040ba62466048bf'));
	console.log('Got request for /.git/objects/91/711d59d9eb6b4d7e87f0013040ba62466048bf ... ');
});


app.get('/.git/objects/91/716157bf44316d671df1aebb68cc72408d02ce', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/91/716157bf44316d671df1aebb68cc72408d02ce'));
	console.log('Got request for /.git/objects/91/716157bf44316d671df1aebb68cc72408d02ce ... ');
});


app.get('/.git/objects/48/16b4cf67f4654352d12c73bd5cfdf995adc2c1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/48/16b4cf67f4654352d12c73bd5cfdf995adc2c1'));
	console.log('Got request for /.git/objects/48/16b4cf67f4654352d12c73bd5cfdf995adc2c1 ... ');
});


app.get('/.git/objects/48/d1529a045f6c25abf5f87753d508d5f7578f73', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/48/d1529a045f6c25abf5f87753d508d5f7578f73'));
	console.log('Got request for /.git/objects/48/d1529a045f6c25abf5f87753d508d5f7578f73 ... ');
});


app.get('/.git/objects/48/2bc2829600d06f5ec2ac0e92d094af7a95ea2b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/48/2bc2829600d06f5ec2ac0e92d094af7a95ea2b'));
	console.log('Got request for /.git/objects/48/2bc2829600d06f5ec2ac0e92d094af7a95ea2b ... ');
});


app.get('/.git/objects/48/4aa727dd5ef70ac34eb8269dbf2c0d9de2dfb8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/48/4aa727dd5ef70ac34eb8269dbf2c0d9de2dfb8'));
	console.log('Got request for /.git/objects/48/4aa727dd5ef70ac34eb8269dbf2c0d9de2dfb8 ... ');
});


app.get('/.git/objects/9f/c8aaf68658cadbf428a89f6992c03bbad5d2a7', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9f/c8aaf68658cadbf428a89f6992c03bbad5d2a7'));
	console.log('Got request for /.git/objects/9f/c8aaf68658cadbf428a89f6992c03bbad5d2a7 ... ');
});


app.get('/.git/objects/9f/54a8b0d9d596e7c08f9ac5c62403bca1b7c583', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9f/54a8b0d9d596e7c08f9ac5c62403bca1b7c583'));
	console.log('Got request for /.git/objects/9f/54a8b0d9d596e7c08f9ac5c62403bca1b7c583 ... ');
});


app.get('/.git/objects/9f/93e37ab9ea370243ff0a1653b9c871d1f6f5bf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9f/93e37ab9ea370243ff0a1653b9c871d1f6f5bf'));
	console.log('Got request for /.git/objects/9f/93e37ab9ea370243ff0a1653b9c871d1f6f5bf ... ');
});


app.get('/.git/objects/9f/b69a0b6bea7e409bafe64caf582cd42daf7441', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9f/b69a0b6bea7e409bafe64caf582cd42daf7441'));
	console.log('Got request for /.git/objects/9f/b69a0b6bea7e409bafe64caf582cd42daf7441 ... ');
});


app.get('/.git/objects/9f/a9b9500675c578258a4954855f23c1cee1ba47', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9f/a9b9500675c578258a4954855f23c1cee1ba47'));
	console.log('Got request for /.git/objects/9f/a9b9500675c578258a4954855f23c1cee1ba47 ... ');
});


app.get('/.git/objects/9f/edfc69a5f8359442b0c209c97fd9b01b21595d', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9f/edfc69a5f8359442b0c209c97fd9b01b21595d'));
	console.log('Got request for /.git/objects/9f/edfc69a5f8359442b0c209c97fd9b01b21595d ... ');
});


app.get('/.git/objects/9f/600110ea22bba1d468c1d99af6a68ba7276fa2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9f/600110ea22bba1d468c1d99af6a68ba7276fa2'));
	console.log('Got request for /.git/objects/9f/600110ea22bba1d468c1d99af6a68ba7276fa2 ... ');
});


app.get('/.git/objects/e7/20c61ea92d44e27f085fc6e0673b0f9a7f42da', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/e7/20c61ea92d44e27f085fc6e0673b0f9a7f42da'));
	console.log('Got request for /.git/objects/e7/20c61ea92d44e27f085fc6e0673b0f9a7f42da ... ');
});


app.get('/.git/objects/ad/563a0e144d860ad2d2aac72aba23400eed1043', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ad/563a0e144d860ad2d2aac72aba23400eed1043'));
	console.log('Got request for /.git/objects/ad/563a0e144d860ad2d2aac72aba23400eed1043 ... ');
});


app.get('/.git/objects/ad/fb910c555fb5cfcd0b4cf02dfcc317f1b1c8b1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ad/fb910c555fb5cfcd0b4cf02dfcc317f1b1c8b1'));
	console.log('Got request for /.git/objects/ad/fb910c555fb5cfcd0b4cf02dfcc317f1b1c8b1 ... ');
});


app.get('/.git/objects/0f/890b8f62b3b16b861a33b800c8e968f3eedc84', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/0f/890b8f62b3b16b861a33b800c8e968f3eedc84'));
	console.log('Got request for /.git/objects/0f/890b8f62b3b16b861a33b800c8e968f3eedc84 ... ');
});


app.get('/.git/objects/bc/c75b6213cd87d8be2eb6ed079deadf305139c8', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/bc/c75b6213cd87d8be2eb6ed079deadf305139c8'));
	console.log('Got request for /.git/objects/bc/c75b6213cd87d8be2eb6ed079deadf305139c8 ... ');
});


app.get('/.git/objects/bc/c2bd235de28c2a78e50e1c6e8d71a47c997d0a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/bc/c2bd235de28c2a78e50e1c6e8d71a47c997d0a'));
	console.log('Got request for /.git/objects/bc/c2bd235de28c2a78e50e1c6e8d71a47c997d0a ... ');
});


app.get('/.git/objects/bc/6d0efcfee352af6f21a426ded1973a50615160', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/bc/6d0efcfee352af6f21a426ded1973a50615160'));
	console.log('Got request for /.git/objects/bc/6d0efcfee352af6f21a426ded1973a50615160 ... ');
});


app.get('/.git/objects/bc/99a846259180f085a7e8aedabafb66b0a53687', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/bc/99a846259180f085a7e8aedabafb66b0a53687'));
	console.log('Got request for /.git/objects/bc/99a846259180f085a7e8aedabafb66b0a53687 ... ');
});


app.get('/.git/objects/f0/37fa848c8afb8288068140a1473508203b4b89', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f0/37fa848c8afb8288068140a1473508203b4b89'));
	console.log('Got request for /.git/objects/f0/37fa848c8afb8288068140a1473508203b4b89 ... ');
});


app.get('/.git/objects/f0/1ec6f50095c5942edd8c2f64ca9808f8f05f92', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f0/1ec6f50095c5942edd8c2f64ca9808f8f05f92'));
	console.log('Got request for /.git/objects/f0/1ec6f50095c5942edd8c2f64ca9808f8f05f92 ... ');
});


app.get('/.git/objects/f0/97c040ec4768083cea830382ccd42095cb6816', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f0/97c040ec4768083cea830382ccd42095cb6816'));
	console.log('Got request for /.git/objects/f0/97c040ec4768083cea830382ccd42095cb6816 ... ');
});


app.get('/.git/objects/f0/9bf6d07cd4a0626bdb6b7d5f3b3e3773e80c7e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f0/9bf6d07cd4a0626bdb6b7d5f3b3e3773e80c7e'));
	console.log('Got request for /.git/objects/f0/9bf6d07cd4a0626bdb6b7d5f3b3e3773e80c7e ... ');
});


app.get('/.git/objects/f0/a4d1abfeb01e060d7aa3a298f1313d67171309', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f0/a4d1abfeb01e060d7aa3a298f1313d67171309'));
	console.log('Got request for /.git/objects/f0/a4d1abfeb01e060d7aa3a298f1313d67171309 ... ');
});


app.get('/.git/objects/24/9c91140fc856fbd6738f82561cc647824bd5ea', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/24/9c91140fc856fbd6738f82561cc647824bd5ea'));
	console.log('Got request for /.git/objects/24/9c91140fc856fbd6738f82561cc647824bd5ea ... ');
});


app.get('/.git/objects/24/c2e89c22d144d35b5cc73980a2898a850f99f6', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/24/c2e89c22d144d35b5cc73980a2898a850f99f6'));
	console.log('Got request for /.git/objects/24/c2e89c22d144d35b5cc73980a2898a850f99f6 ... ');
});


app.get('/.git/objects/05/a79baf22c0d285107e7ba64a204a0b2b4c1eaf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/05/a79baf22c0d285107e7ba64a204a0b2b4c1eaf'));
	console.log('Got request for /.git/objects/05/a79baf22c0d285107e7ba64a204a0b2b4c1eaf ... ');
});


app.get('/.git/objects/05/c94734ba9931da4a5b291dc5ec929224a37ebd', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/05/c94734ba9931da4a5b291dc5ec929224a37ebd'));
	console.log('Got request for /.git/objects/05/c94734ba9931da4a5b291dc5ec929224a37ebd ... ');
});


app.get('/.git/objects/05/094d34c696249b10c58ac61f381a3f3b54f501', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/05/094d34c696249b10c58ac61f381a3f3b54f501'));
	console.log('Got request for /.git/objects/05/094d34c696249b10c58ac61f381a3f3b54f501 ... ');
});


app.get('/.git/objects/7a/52e67359505b8529021e0735d8184737e9d578', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7a/52e67359505b8529021e0735d8184737e9d578'));
	console.log('Got request for /.git/objects/7a/52e67359505b8529021e0735d8184737e9d578 ... ');
});


app.get('/.git/objects/9c/a15c8f5759667948bfaf7b001a99322df09bbe', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9c/a15c8f5759667948bfaf7b001a99322df09bbe'));
	console.log('Got request for /.git/objects/9c/a15c8f5759667948bfaf7b001a99322df09bbe ... ');
});


app.get('/.git/objects/9c/d0e063b37302b486bc230f9ee097d675f42ef1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9c/d0e063b37302b486bc230f9ee097d675f42ef1'));
	console.log('Got request for /.git/objects/9c/d0e063b37302b486bc230f9ee097d675f42ef1 ... ');
});


app.get('/.git/objects/9c/93a426016a9c7317f2edc91064b0250158f6eb', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/9c/93a426016a9c7317f2edc91064b0250158f6eb'));
	console.log('Got request for /.git/objects/9c/93a426016a9c7317f2edc91064b0250158f6eb ... ');
});


app.get('/.git/objects/fb/26a13f04cbe42c2557c58e6392bce683b6cb6b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/fb/26a13f04cbe42c2557c58e6392bce683b6cb6b'));
	console.log('Got request for /.git/objects/fb/26a13f04cbe42c2557c58e6392bce683b6cb6b ... ');
});


app.get('/.git/objects/fb/b7ee0eed8d1dd0fe3b5a9d6ff41d1c4f044675', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/fb/b7ee0eed8d1dd0fe3b5a9d6ff41d1c4f044675'));
	console.log('Got request for /.git/objects/fb/b7ee0eed8d1dd0fe3b5a9d6ff41d1c4f044675 ... ');
});


app.get('/.git/objects/23/f6dc9d06f8ff7e36e9fada5dd46c5a26bd22e2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/23/f6dc9d06f8ff7e36e9fada5dd46c5a26bd22e2'));
	console.log('Got request for /.git/objects/23/f6dc9d06f8ff7e36e9fada5dd46c5a26bd22e2 ... ');
});


app.get('/.git/objects/2d/67e5f228ec69f92df850f8daf90e5b34cf772f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2d/67e5f228ec69f92df850f8daf90e5b34cf772f'));
	console.log('Got request for /.git/objects/2d/67e5f228ec69f92df850f8daf90e5b34cf772f ... ');
});


app.get('/.git/objects/2d/a5bc64cd0ffdf0589bca4e560b1e07655164a0', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/2d/a5bc64cd0ffdf0589bca4e560b1e07655164a0'));
	console.log('Got request for /.git/objects/2d/a5bc64cd0ffdf0589bca4e560b1e07655164a0 ... ');
});


app.get('/.git/objects/a0/4eae3854085aedce9f5141585b984e6b8e6b13', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a0/4eae3854085aedce9f5141585b984e6b8e6b13'));
	console.log('Got request for /.git/objects/a0/4eae3854085aedce9f5141585b984e6b8e6b13 ... ');
});


app.get('/.git/objects/a0/b7eb6c529a997bae82acb530c095d9cf80a5a9', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a0/b7eb6c529a997bae82acb530c095d9cf80a5a9'));
	console.log('Got request for /.git/objects/a0/b7eb6c529a997bae82acb530c095d9cf80a5a9 ... ');
});


app.get('/.git/objects/a0/1e7cad59048b65a471e121cfc6c1143247dd44', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a0/1e7cad59048b65a471e121cfc6c1143247dd44'));
	console.log('Got request for /.git/objects/a0/1e7cad59048b65a471e121cfc6c1143247dd44 ... ');
});


app.get('/.git/objects/da/015c0ebe1d62fd55784b781b545544328eb91f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/da/015c0ebe1d62fd55784b781b545544328eb91f'));
	console.log('Got request for /.git/objects/da/015c0ebe1d62fd55784b781b545544328eb91f ... ');
});


app.get('/.git/objects/da/34ed8c0e131329e16ba9f756366c159ef40c0c', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/da/34ed8c0e131329e16ba9f756366c159ef40c0c'));
	console.log('Got request for /.git/objects/da/34ed8c0e131329e16ba9f756366c159ef40c0c ... ');
});


app.get('/.git/objects/da/03f2a3d680777fd640d0148fea3f648f9496eb', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/da/03f2a3d680777fd640d0148fea3f648f9496eb'));
	console.log('Got request for /.git/objects/da/03f2a3d680777fd640d0148fea3f648f9496eb ... ');
});


app.get('/.git/objects/96/73c798ca8003557385e0cd083c7d83644b5cea', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/96/73c798ca8003557385e0cd083c7d83644b5cea'));
	console.log('Got request for /.git/objects/96/73c798ca8003557385e0cd083c7d83644b5cea ... ');
});


app.get('/.git/objects/96/929ff4a54d3cc044a8fb11972901bba56965f2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/96/929ff4a54d3cc044a8fb11972901bba56965f2'));
	console.log('Got request for /.git/objects/96/929ff4a54d3cc044a8fb11972901bba56965f2 ... ');
});


app.get('/.git/objects/96/c5374d401c4daee854e91b756028b7eba41cdd', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/96/c5374d401c4daee854e91b756028b7eba41cdd'));
	console.log('Got request for /.git/objects/96/c5374d401c4daee854e91b756028b7eba41cdd ... ');
});


app.get('/.git/objects/df/8cbc65d9cf38fb148a7d3886367e10ddeb703f', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/df/8cbc65d9cf38fb148a7d3886367e10ddeb703f'));
	console.log('Got request for /.git/objects/df/8cbc65d9cf38fb148a7d3886367e10ddeb703f ... ');
});


app.get('/.git/objects/15/906cfab7b9fa97a8301c28ad05fe581b01b7a2', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/15/906cfab7b9fa97a8301c28ad05fe581b01b7a2'));
	console.log('Got request for /.git/objects/15/906cfab7b9fa97a8301c28ad05fe581b01b7a2 ... ');
});


app.get('/.git/objects/15/4cb49eece286acc1c9c40a7522bc90e70dceb0', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/15/4cb49eece286acc1c9c40a7522bc90e70dceb0'));
	console.log('Got request for /.git/objects/15/4cb49eece286acc1c9c40a7522bc90e70dceb0 ... ');
});


app.get('/.git/objects/49/d517d2458051ceb47c50af64ab2b22461d2b8b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/49/d517d2458051ceb47c50af64ab2b22461d2b8b'));
	console.log('Got request for /.git/objects/49/d517d2458051ceb47c50af64ab2b22461d2b8b ... ');
});


app.get('/.git/objects/78/0fde4efe4dfe00b10f0bb34411949a671d0ece', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/78/0fde4efe4dfe00b10f0bb34411949a671d0ece'));
	console.log('Got request for /.git/objects/78/0fde4efe4dfe00b10f0bb34411949a671d0ece ... ');
});


app.get('/.git/objects/78/6f28889dcaf3951b9c883f723abfdf030f7c73', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/78/6f28889dcaf3951b9c883f723abfdf030f7c73'));
	console.log('Got request for /.git/objects/78/6f28889dcaf3951b9c883f723abfdf030f7c73 ... ');
});


app.get('/.git/objects/7d/4f96687e29795604085caed391a8dfef6f892a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/7d/4f96687e29795604085caed391a8dfef6f892a'));
	console.log('Got request for /.git/objects/7d/4f96687e29795604085caed391a8dfef6f892a ... ');
});


app.get('/.git/objects/ce/e2f090b4ad157ae49dc8b779d28f8c388f0754', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ce/e2f090b4ad157ae49dc8b779d28f8c388f0754'));
	console.log('Got request for /.git/objects/ce/e2f090b4ad157ae49dc8b779d28f8c388f0754 ... ');
});


app.get('/.git/objects/ce/cb8f4a40986bfb0a79bad1ae8b1470ac3fff81', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ce/cb8f4a40986bfb0a79bad1ae8b1470ac3fff81'));
	console.log('Got request for /.git/objects/ce/cb8f4a40986bfb0a79bad1ae8b1470ac3fff81 ... ');
});


app.get('/.git/objects/ce/3d7a0f090b641ff40b259248ebbb5096117c72', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/ce/3d7a0f090b641ff40b259248ebbb5096117c72'));
	console.log('Got request for /.git/objects/ce/3d7a0f090b641ff40b259248ebbb5096117c72 ... ');
});


app.get('/.git/objects/a9/b4dd4981dda1984255ec797acd117ecc535d9a', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a9/b4dd4981dda1984255ec797acd117ecc535d9a'));
	console.log('Got request for /.git/objects/a9/b4dd4981dda1984255ec797acd117ecc535d9a ... ');
});


app.get('/.git/objects/a9/2d4f03d1b8e797e4a89d4d81e3726b07c36f47', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/a9/2d4f03d1b8e797e4a89d4d81e3726b07c36f47'));
	console.log('Got request for /.git/objects/a9/2d4f03d1b8e797e4a89d4d81e3726b07c36f47 ... ');
});


app.get('/.git/objects/dc/c229bd4e5954d93117ce764b9d7f9996fb8dd5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/dc/c229bd4e5954d93117ce764b9d7f9996fb8dd5'));
	console.log('Got request for /.git/objects/dc/c229bd4e5954d93117ce764b9d7f9996fb8dd5 ... ');
});


app.get('/.git/objects/dc/f0990f7175edf1fa022fb715da3b5fb05cd0dc', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/dc/f0990f7175edf1fa022fb715da3b5fb05cd0dc'));
	console.log('Got request for /.git/objects/dc/f0990f7175edf1fa022fb715da3b5fb05cd0dc ... ');
});


app.get('/.git/objects/44/111b714a352f70bc9918789c62aebd1bc2b7df', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/44/111b714a352f70bc9918789c62aebd1bc2b7df'));
	console.log('Got request for /.git/objects/44/111b714a352f70bc9918789c62aebd1bc2b7df ... ');
});


app.get('/.git/objects/44/3cd41b8bedccd6c63e119c0ed1b92009387aaa', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/44/3cd41b8bedccd6c63e119c0ed1b92009387aaa'));
	console.log('Got request for /.git/objects/44/3cd41b8bedccd6c63e119c0ed1b92009387aaa ... ');
});


app.get('/.git/objects/pack/pack-38c0de6b7f94b82595a1d78d79343c42a70bc562.idx', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/pack/pack-38c0de6b7f94b82595a1d78d79343c42a70bc562.idx'));
	console.log('Got request for /.git/objects/pack/pack-38c0de6b7f94b82595a1d78d79343c42a70bc562.idx ... ');
});


app.get('/.git/objects/pack/pack-38c0de6b7f94b82595a1d78d79343c42a70bc562.pack', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/pack/pack-38c0de6b7f94b82595a1d78d79343c42a70bc562.pack'));
	console.log('Got request for /.git/objects/pack/pack-38c0de6b7f94b82595a1d78d79343c42a70bc562.pack ... ');
});


app.get('/.git/objects/0b/9355d3fc01b2b7ddaa3ad23e909254b947c2e4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/0b/9355d3fc01b2b7ddaa3ad23e909254b947c2e4'));
	console.log('Got request for /.git/objects/0b/9355d3fc01b2b7ddaa3ad23e909254b947c2e4 ... ');
});


app.get('/.git/objects/0b/f9d64e73911b92a52c3e7dc43ced2a2a01b30e', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/0b/f9d64e73911b92a52c3e7dc43ced2a2a01b30e'));
	console.log('Got request for /.git/objects/0b/f9d64e73911b92a52c3e7dc43ced2a2a01b30e ... ');
});


app.get('/.git/objects/0b/e88fab422c0fa7c3a9b0b0abca1b16899c6263', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/0b/e88fab422c0fa7c3a9b0b0abca1b16899c6263'));
	console.log('Got request for /.git/objects/0b/e88fab422c0fa7c3a9b0b0abca1b16899c6263 ... ');
});


app.get('/.git/objects/38/1232c49541c8550287204e79ebd19e5404daaf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/38/1232c49541c8550287204e79ebd19e5404daaf'));
	console.log('Got request for /.git/objects/38/1232c49541c8550287204e79ebd19e5404daaf ... ');
});


app.get('/.git/objects/1c/cadbb5056111fc394c075330ac1ec8e712da91', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1c/cadbb5056111fc394c075330ac1ec8e712da91'));
	console.log('Got request for /.git/objects/1c/cadbb5056111fc394c075330ac1ec8e712da91 ... ');
});


app.get('/.git/objects/1c/83f78fd763a7be2a01f1c8e0eac38d4cafd4b4', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1c/83f78fd763a7be2a01f1c8e0eac38d4cafd4b4'));
	console.log('Got request for /.git/objects/1c/83f78fd763a7be2a01f1c8e0eac38d4cafd4b4 ... ');
});


app.get('/.git/objects/1c/54b3b0fdf0bcfa4f0014471e399e7e094d5858', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1c/54b3b0fdf0bcfa4f0014471e399e7e094d5858'));
	console.log('Got request for /.git/objects/1c/54b3b0fdf0bcfa4f0014471e399e7e094d5858 ... ');
});


app.get('/.git/objects/5b/96cc53eb61326c81baa829b6fd8a6924b84ca5', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/5b/96cc53eb61326c81baa829b6fd8a6924b84ca5'));
	console.log('Got request for /.git/objects/5b/96cc53eb61326c81baa829b6fd8a6924b84ca5 ... ');
});


app.get('/.git/objects/5b/e548467a173629f522e0f904917bb7a28b0fad', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/5b/e548467a173629f522e0f904917bb7a28b0fad'));
	console.log('Got request for /.git/objects/5b/e548467a173629f522e0f904917bb7a28b0fad ... ');
});


app.get('/.git/objects/5b/75ee92d66579f29c5ff31d548cfd4534c14e01', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/5b/75ee92d66579f29c5ff31d548cfd4534c14e01'));
	console.log('Got request for /.git/objects/5b/75ee92d66579f29c5ff31d548cfd4534c14e01 ... ');
});


app.get('/.git/objects/5b/710e56f0f75865f6d296bb8aa17842598dc342', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/5b/710e56f0f75865f6d296bb8aa17842598dc342'));
	console.log('Got request for /.git/objects/5b/710e56f0f75865f6d296bb8aa17842598dc342 ... ');
});


app.get('/.git/objects/f9/8ed687769cd3e9e00a06f02602dbdd2a5e2640', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f9/8ed687769cd3e9e00a06f02602dbdd2a5e2640'));
	console.log('Got request for /.git/objects/f9/8ed687769cd3e9e00a06f02602dbdd2a5e2640 ... ');
});


app.get('/.git/objects/f9/3214faaf1c73dd531d097daa75f8b9abbb20cf', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f9/3214faaf1c73dd531d097daa75f8b9abbb20cf'));
	console.log('Got request for /.git/objects/f9/3214faaf1c73dd531d097daa75f8b9abbb20cf ... ');
});


app.get('/.git/objects/f9/9d33ef08549fe5422a8c523dd09b88c855d311', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/f9/9d33ef08549fe5422a8c523dd09b88c855d311'));
	console.log('Got request for /.git/objects/f9/9d33ef08549fe5422a8c523dd09b88c855d311 ... ');
});


app.get('/.git/objects/d1/59169d1050894d3ea3b98e1c965c4058208fe1', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d1/59169d1050894d3ea3b98e1c965c4058208fe1'));
	console.log('Got request for /.git/objects/d1/59169d1050894d3ea3b98e1c965c4058208fe1 ... ');
});


app.get('/.git/objects/d1/1acb3b08348c8ec4080276d31a6ce4f106e311', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d1/1acb3b08348c8ec4080276d31a6ce4f106e311'));
	console.log('Got request for /.git/objects/d1/1acb3b08348c8ec4080276d31a6ce4f106e311 ... ');
});


app.get('/.git/objects/d1/1e2ceb21d39e90647df693f1d0d001a8dad417', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/d1/1e2ceb21d39e90647df693f1d0d001a8dad417'));
	console.log('Got request for /.git/objects/d1/1e2ceb21d39e90647df693f1d0d001a8dad417 ... ');
});


app.get('/.git/objects/5f/37123486fd4c7373eb46d8bbc254319d600e17', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/5f/37123486fd4c7373eb46d8bbc254319d600e17'));
	console.log('Got request for /.git/objects/5f/37123486fd4c7373eb46d8bbc254319d600e17 ... ');
});


app.get('/.git/objects/5f/1926cc44c9fa8151f6d82bb349f57fdfbe67e7', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/5f/1926cc44c9fa8151f6d82bb349f57fdfbe67e7'));
	console.log('Got request for /.git/objects/5f/1926cc44c9fa8151f6d82bb349f57fdfbe67e7 ... ');
});


app.get('/.git/objects/b6/382210999d16ffdeb646f2ecd5fff6ec3854bb', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b6/382210999d16ffdeb646f2ecd5fff6ec3854bb'));
	console.log('Got request for /.git/objects/b6/382210999d16ffdeb646f2ecd5fff6ec3854bb ... ');
});


app.get('/.git/objects/b6/38a3cd92cda6e4cc676ceb0334b0cb87cbc8f3', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b6/38a3cd92cda6e4cc676ceb0334b0cb87cbc8f3'));
	console.log('Got request for /.git/objects/b6/38a3cd92cda6e4cc676ceb0334b0cb87cbc8f3 ... ');
});


app.get('/.git/objects/b6/2960f6f73fcc9be433bdbfedee22f86b12863b', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/b6/2960f6f73fcc9be433bdbfedee22f86b12863b'));
	console.log('Got request for /.git/objects/b6/2960f6f73fcc9be433bdbfedee22f86b12863b ... ');
});


app.get('/.git/objects/1d/12153a839c95a9d489ad54a28b9911d536f626', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/1d/12153a839c95a9d489ad54a28b9911d536f626'));
	console.log('Got request for /.git/objects/1d/12153a839c95a9d489ad54a28b9911d536f626 ... ');
});


app.get('/.git/objects/aa/5c19a623c42337d07e7f8dbbd710b532dc37a7', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/aa/5c19a623c42337d07e7f8dbbd710b532dc37a7'));
	console.log('Got request for /.git/objects/aa/5c19a623c42337d07e7f8dbbd710b532dc37a7 ... ');
});


app.get('/.git/objects/aa/44c5295d48c789bc44acb552ba0cb9a798d034', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/objects/aa/44c5295d48c789bc44acb552ba0cb9a798d034'));
	console.log('Got request for /.git/objects/aa/44c5295d48c789bc44acb552ba0cb9a798d034 ... ');
});


app.get('/.git/logs/HEAD', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/logs/HEAD'));
	console.log('Got request for /.git/logs/HEAD ... ');
});


app.get('/.git/logs/refs/remotes/origin/HEAD', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/logs/refs/remotes/origin/HEAD'));
	console.log('Got request for /.git/logs/refs/remotes/origin/HEAD ... ');
});


app.get('/.git/logs/refs/remotes/origin/master', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/logs/refs/remotes/origin/master'));
	console.log('Got request for /.git/logs/refs/remotes/origin/master ... ');
});


app.get('/.git/logs/refs/heads/master', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/logs/refs/heads/master'));
	console.log('Got request for /.git/logs/refs/heads/master ... ');
});


app.get('/.git/HEAD', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/HEAD'));
	console.log('Got request for /.git/HEAD ... ');
});


app.get('/.git/ORIG_HEAD', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/ORIG_HEAD'));
	console.log('Got request for /.git/ORIG_HEAD ... ');
});


app.get('/.git/config', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/config'));
	console.log('Got request for /.git/config ... ');
});


app.get('/.git/refs/remotes/origin/HEAD', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/refs/remotes/origin/HEAD'));
	console.log('Got request for /.git/refs/remotes/origin/HEAD ... ');
});


app.get('/.git/refs/remotes/origin/master', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/refs/remotes/origin/master'));
	console.log('Got request for /.git/refs/remotes/origin/master ... ');
});


app.get('/.git/refs/heads/master', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/refs/heads/master'));
	console.log('Got request for /.git/refs/heads/master ... ');
});


app.get('/.git/packed-refs', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/packed-refs'));
	console.log('Got request for /.git/packed-refs ... ');
});


app.get('/.git/FETCH_HEAD', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/FETCH_HEAD'));
	console.log('Got request for /.git/FETCH_HEAD ... ');
});


app.get('/.git/description', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/description'));
	console.log('Got request for /.git/description ... ');
});


app.get('/.git/index', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/index'));
	console.log('Got request for /.git/index ... ');
});


app.get('/.git/info/exclude', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/info/exclude'));
	console.log('Got request for /.git/info/exclude ... ');
});


app.get('/.git/COMMIT_EDITMSG', (req, res) => {
	res.sendFile(path.join(__dirname + '/.git/COMMIT_EDITMSG'));
	console.log('Got request for /.git/COMMIT_EDITMSG ... ');
});


app.get('/index.html', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
	console.log('Got request for /index.html ... ');
});


app.get('/AutoWebServer', (req, res) => {
	res.sendFile(path.join(__dirname + '/AutoWebServer'));
	console.log('Got request for /AutoWebServer ... ');
});


app.get('/pictures/background.jpg', (req, res) => {
	res.sendFile(path.join(__dirname + '/pictures/background.jpg'));
	console.log('Got request for /pictures/background.jpg ... ');
});


app.get('/pictures/icon.png', (req, res) => {
	res.sendFile(path.join(__dirname + '/pictures/icon.png'));
	console.log('Got request for /pictures/icon.png ... ');
});


app.get('/pictures/background.old.jpg', (req, res) => {
	res.sendFile(path.join(__dirname + '/pictures/background.old.jpg'));
	console.log('Got request for /pictures/background.old.jpg ... ');
});


app.get('/server.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/server.js'));
	console.log('Got request for /server.js ... ');
});


app.get('/css/stylesheet.css', (req, res) => {
	res.sendFile(path.join(__dirname + '/css/stylesheet.css'));
	console.log('Got request for /css/stylesheet.css ... ');
});


app.get('/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/README.md'));
	console.log('Got request for /README.md ... ');
});


app.get('/pages/github.html', (req, res) => {
	res.sendFile(path.join(__dirname + '/pages/github.html'));
	console.log('Got request for /pages/github.html ... ');
});


app.get('/node_modules/proxy-addr/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/proxy-addr/HISTORY.md'));
	console.log('Got request for /node_modules/proxy-addr/HISTORY.md ... ');
});


app.get('/node_modules/proxy-addr/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/proxy-addr/index.js'));
	console.log('Got request for /node_modules/proxy-addr/index.js ... ');
});


app.get('/node_modules/proxy-addr/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/proxy-addr/LICENSE'));
	console.log('Got request for /node_modules/proxy-addr/LICENSE ... ');
});


app.get('/node_modules/proxy-addr/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/proxy-addr/package.json'));
	console.log('Got request for /node_modules/proxy-addr/package.json ... ');
});


app.get('/node_modules/proxy-addr/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/proxy-addr/README.md'));
	console.log('Got request for /node_modules/proxy-addr/README.md ... ');
});


app.get('/node_modules/cookie/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie/HISTORY.md'));
	console.log('Got request for /node_modules/cookie/HISTORY.md ... ');
});


app.get('/node_modules/cookie/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie/index.js'));
	console.log('Got request for /node_modules/cookie/index.js ... ');
});


app.get('/node_modules/cookie/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie/LICENSE'));
	console.log('Got request for /node_modules/cookie/LICENSE ... ');
});


app.get('/node_modules/cookie/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie/package.json'));
	console.log('Got request for /node_modules/cookie/package.json ... ');
});


app.get('/node_modules/cookie/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie/README.md'));
	console.log('Got request for /node_modules/cookie/README.md ... ');
});


app.get('/node_modules/range-parser/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/range-parser/HISTORY.md'));
	console.log('Got request for /node_modules/range-parser/HISTORY.md ... ');
});


app.get('/node_modules/range-parser/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/range-parser/index.js'));
	console.log('Got request for /node_modules/range-parser/index.js ... ');
});


app.get('/node_modules/range-parser/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/range-parser/LICENSE'));
	console.log('Got request for /node_modules/range-parser/LICENSE ... ');
});


app.get('/node_modules/range-parser/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/range-parser/package.json'));
	console.log('Got request for /node_modules/range-parser/package.json ... ');
});


app.get('/node_modules/range-parser/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/range-parser/README.md'));
	console.log('Got request for /node_modules/range-parser/README.md ... ');
});


app.get('/node_modules/body-parser/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/HISTORY.md'));
	console.log('Got request for /node_modules/body-parser/HISTORY.md ... ');
});


app.get('/node_modules/body-parser/lib/read.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/lib/read.js'));
	console.log('Got request for /node_modules/body-parser/lib/read.js ... ');
});


app.get('/node_modules/body-parser/lib/types/raw.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/lib/types/raw.js'));
	console.log('Got request for /node_modules/body-parser/lib/types/raw.js ... ');
});


app.get('/node_modules/body-parser/lib/types/text.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/lib/types/text.js'));
	console.log('Got request for /node_modules/body-parser/lib/types/text.js ... ');
});


app.get('/node_modules/body-parser/lib/types/json.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/lib/types/json.js'));
	console.log('Got request for /node_modules/body-parser/lib/types/json.js ... ');
});


app.get('/node_modules/body-parser/lib/types/urlencoded.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/lib/types/urlencoded.js'));
	console.log('Got request for /node_modules/body-parser/lib/types/urlencoded.js ... ');
});


app.get('/node_modules/body-parser/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/index.js'));
	console.log('Got request for /node_modules/body-parser/index.js ... ');
});


app.get('/node_modules/body-parser/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/LICENSE'));
	console.log('Got request for /node_modules/body-parser/LICENSE ... ');
});


app.get('/node_modules/body-parser/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/package.json'));
	console.log('Got request for /node_modules/body-parser/package.json ... ');
});


app.get('/node_modules/body-parser/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/body-parser/README.md'));
	console.log('Got request for /node_modules/body-parser/README.md ... ');
});


app.get('/node_modules/merge-descriptors/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/merge-descriptors/HISTORY.md'));
	console.log('Got request for /node_modules/merge-descriptors/HISTORY.md ... ');
});


app.get('/node_modules/merge-descriptors/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/merge-descriptors/index.js'));
	console.log('Got request for /node_modules/merge-descriptors/index.js ... ');
});


app.get('/node_modules/merge-descriptors/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/merge-descriptors/LICENSE'));
	console.log('Got request for /node_modules/merge-descriptors/LICENSE ... ');
});


app.get('/node_modules/merge-descriptors/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/merge-descriptors/package.json'));
	console.log('Got request for /node_modules/merge-descriptors/package.json ... ');
});


app.get('/node_modules/merge-descriptors/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/merge-descriptors/README.md'));
	console.log('Got request for /node_modules/merge-descriptors/README.md ... ');
});


app.get('/node_modules/accepts/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/accepts/HISTORY.md'));
	console.log('Got request for /node_modules/accepts/HISTORY.md ... ');
});


app.get('/node_modules/accepts/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/accepts/index.js'));
	console.log('Got request for /node_modules/accepts/index.js ... ');
});


app.get('/node_modules/accepts/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/accepts/LICENSE'));
	console.log('Got request for /node_modules/accepts/LICENSE ... ');
});


app.get('/node_modules/accepts/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/accepts/package.json'));
	console.log('Got request for /node_modules/accepts/package.json ... ');
});


app.get('/node_modules/accepts/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/accepts/README.md'));
	console.log('Got request for /node_modules/accepts/README.md ... ');
});


app.get('/node_modules/send/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/send/HISTORY.md'));
	console.log('Got request for /node_modules/send/HISTORY.md ... ');
});


app.get('/node_modules/send/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/send/index.js'));
	console.log('Got request for /node_modules/send/index.js ... ');
});


app.get('/node_modules/send/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/send/LICENSE'));
	console.log('Got request for /node_modules/send/LICENSE ... ');
});


app.get('/node_modules/send/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/send/package.json'));
	console.log('Got request for /node_modules/send/package.json ... ');
});


app.get('/node_modules/send/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/send/README.md'));
	console.log('Got request for /node_modules/send/README.md ... ');
});


app.get('/node_modules/send/node_modules/ms/readme.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/send/node_modules/ms/readme.md'));
	console.log('Got request for /node_modules/send/node_modules/ms/readme.md ... ');
});


app.get('/node_modules/send/node_modules/ms/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/send/node_modules/ms/index.js'));
	console.log('Got request for /node_modules/send/node_modules/ms/index.js ... ');
});


app.get('/node_modules/send/node_modules/ms/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/send/node_modules/ms/package.json'));
	console.log('Got request for /node_modules/send/node_modules/ms/package.json ... ');
});


app.get('/node_modules/send/node_modules/ms/license.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/send/node_modules/ms/license.md'));
	console.log('Got request for /node_modules/send/node_modules/ms/license.md ... ');
});


app.get('/node_modules/media-typer/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/media-typer/HISTORY.md'));
	console.log('Got request for /node_modules/media-typer/HISTORY.md ... ');
});


app.get('/node_modules/media-typer/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/media-typer/index.js'));
	console.log('Got request for /node_modules/media-typer/index.js ... ');
});


app.get('/node_modules/media-typer/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/media-typer/LICENSE'));
	console.log('Got request for /node_modules/media-typer/LICENSE ... ');
});


app.get('/node_modules/media-typer/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/media-typer/package.json'));
	console.log('Got request for /node_modules/media-typer/package.json ... ');
});


app.get('/node_modules/media-typer/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/media-typer/README.md'));
	console.log('Got request for /node_modules/media-typer/README.md ... ');
});


app.get('/node_modules/mime/CHANGELOG.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/CHANGELOG.md'));
	console.log('Got request for /node_modules/mime/CHANGELOG.md ... ');
});


app.get('/node_modules/mime/.npmignore', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/.npmignore'));
	console.log('Got request for /node_modules/mime/.npmignore ... ');
});


app.get('/node_modules/mime/mime.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/mime.js'));
	console.log('Got request for /node_modules/mime/mime.js ... ');
});


app.get('/node_modules/mime/cli.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/cli.js'));
	console.log('Got request for /node_modules/mime/cli.js ... ');
});


app.get('/node_modules/mime/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/LICENSE'));
	console.log('Got request for /node_modules/mime/LICENSE ... ');
});


app.get('/node_modules/mime/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/package.json'));
	console.log('Got request for /node_modules/mime/package.json ... ');
});


app.get('/node_modules/mime/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/README.md'));
	console.log('Got request for /node_modules/mime/README.md ... ');
});


app.get('/node_modules/mime/src/test.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/src/test.js'));
	console.log('Got request for /node_modules/mime/src/test.js ... ');
});


app.get('/node_modules/mime/src/build.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/src/build.js'));
	console.log('Got request for /node_modules/mime/src/build.js ... ');
});


app.get('/node_modules/mime/types.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime/types.json'));
	console.log('Got request for /node_modules/mime/types.json ... ');
});


app.get('/node_modules/ipaddr.js/ipaddr.min.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ipaddr.js/ipaddr.min.js'));
	console.log('Got request for /node_modules/ipaddr.js/ipaddr.min.js ... ');
});


app.get('/node_modules/ipaddr.js/lib/ipaddr.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ipaddr.js/lib/ipaddr.js'));
	console.log('Got request for /node_modules/ipaddr.js/lib/ipaddr.js ... ');
});


app.get('/node_modules/ipaddr.js/lib/ipaddr.js.d.ts', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ipaddr.js/lib/ipaddr.js.d.ts'));
	console.log('Got request for /node_modules/ipaddr.js/lib/ipaddr.js.d.ts ... ');
});


app.get('/node_modules/ipaddr.js/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ipaddr.js/LICENSE'));
	console.log('Got request for /node_modules/ipaddr.js/LICENSE ... ');
});


app.get('/node_modules/ipaddr.js/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ipaddr.js/package.json'));
	console.log('Got request for /node_modules/ipaddr.js/package.json ... ');
});


app.get('/node_modules/ipaddr.js/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ipaddr.js/README.md'));
	console.log('Got request for /node_modules/ipaddr.js/README.md ... ');
});


app.get('/node_modules/finalhandler/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/finalhandler/HISTORY.md'));
	console.log('Got request for /node_modules/finalhandler/HISTORY.md ... ');
});


app.get('/node_modules/finalhandler/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/finalhandler/index.js'));
	console.log('Got request for /node_modules/finalhandler/index.js ... ');
});


app.get('/node_modules/finalhandler/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/finalhandler/LICENSE'));
	console.log('Got request for /node_modules/finalhandler/LICENSE ... ');
});


app.get('/node_modules/finalhandler/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/finalhandler/package.json'));
	console.log('Got request for /node_modules/finalhandler/package.json ... ');
});


app.get('/node_modules/finalhandler/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/finalhandler/README.md'));
	console.log('Got request for /node_modules/finalhandler/README.md ... ');
});


app.get('/node_modules/content-type/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-type/HISTORY.md'));
	console.log('Got request for /node_modules/content-type/HISTORY.md ... ');
});


app.get('/node_modules/content-type/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-type/index.js'));
	console.log('Got request for /node_modules/content-type/index.js ... ');
});


app.get('/node_modules/content-type/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-type/LICENSE'));
	console.log('Got request for /node_modules/content-type/LICENSE ... ');
});


app.get('/node_modules/content-type/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-type/package.json'));
	console.log('Got request for /node_modules/content-type/package.json ... ');
});


app.get('/node_modules/content-type/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-type/README.md'));
	console.log('Got request for /node_modules/content-type/README.md ... ');
});


app.get('/node_modules/express/Readme.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/Readme.md'));
	console.log('Got request for /node_modules/express/Readme.md ... ');
});


app.get('/node_modules/express/History.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/History.md'));
	console.log('Got request for /node_modules/express/History.md ... ');
});


app.get('/node_modules/express/lib/express.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/express.js'));
	console.log('Got request for /node_modules/express/lib/express.js ... ');
});


app.get('/node_modules/express/lib/response.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/response.js'));
	console.log('Got request for /node_modules/express/lib/response.js ... ');
});


app.get('/node_modules/express/lib/application.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/application.js'));
	console.log('Got request for /node_modules/express/lib/application.js ... ');
});


app.get('/node_modules/express/lib/utils.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/utils.js'));
	console.log('Got request for /node_modules/express/lib/utils.js ... ');
});


app.get('/node_modules/express/lib/middleware/query.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/middleware/query.js'));
	console.log('Got request for /node_modules/express/lib/middleware/query.js ... ');
});


app.get('/node_modules/express/lib/middleware/init.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/middleware/init.js'));
	console.log('Got request for /node_modules/express/lib/middleware/init.js ... ');
});


app.get('/node_modules/express/lib/router/layer.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/router/layer.js'));
	console.log('Got request for /node_modules/express/lib/router/layer.js ... ');
});


app.get('/node_modules/express/lib/router/route.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/router/route.js'));
	console.log('Got request for /node_modules/express/lib/router/route.js ... ');
});


app.get('/node_modules/express/lib/router/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/router/index.js'));
	console.log('Got request for /node_modules/express/lib/router/index.js ... ');
});


app.get('/node_modules/express/lib/request.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/request.js'));
	console.log('Got request for /node_modules/express/lib/request.js ... ');
});


app.get('/node_modules/express/lib/view.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/lib/view.js'));
	console.log('Got request for /node_modules/express/lib/view.js ... ');
});


app.get('/node_modules/express/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/index.js'));
	console.log('Got request for /node_modules/express/index.js ... ');
});


app.get('/node_modules/express/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/LICENSE'));
	console.log('Got request for /node_modules/express/LICENSE ... ');
});


app.get('/node_modules/express/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/express/package.json'));
	console.log('Got request for /node_modules/express/package.json ... ');
});


app.get('/node_modules/depd/Readme.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/depd/Readme.md'));
	console.log('Got request for /node_modules/depd/Readme.md ... ');
});


app.get('/node_modules/depd/History.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/depd/History.md'));
	console.log('Got request for /node_modules/depd/History.md ... ');
});


app.get('/node_modules/depd/lib/compat/callsite-tostring.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/depd/lib/compat/callsite-tostring.js'));
	console.log('Got request for /node_modules/depd/lib/compat/callsite-tostring.js ... ');
});


app.get('/node_modules/depd/lib/compat/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/depd/lib/compat/index.js'));
	console.log('Got request for /node_modules/depd/lib/compat/index.js ... ');
});


app.get('/node_modules/depd/lib/compat/event-listener-count.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/depd/lib/compat/event-listener-count.js'));
	console.log('Got request for /node_modules/depd/lib/compat/event-listener-count.js ... ');
});


app.get('/node_modules/depd/lib/browser/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/depd/lib/browser/index.js'));
	console.log('Got request for /node_modules/depd/lib/browser/index.js ... ');
});


app.get('/node_modules/depd/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/depd/index.js'));
	console.log('Got request for /node_modules/depd/index.js ... ');
});


app.get('/node_modules/depd/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/depd/LICENSE'));
	console.log('Got request for /node_modules/depd/LICENSE ... ');
});


app.get('/node_modules/depd/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/depd/package.json'));
	console.log('Got request for /node_modules/depd/package.json ... ');
});


app.get('/node_modules/escape-html/Readme.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/escape-html/Readme.md'));
	console.log('Got request for /node_modules/escape-html/Readme.md ... ');
});


app.get('/node_modules/escape-html/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/escape-html/index.js'));
	console.log('Got request for /node_modules/escape-html/index.js ... ');
});


app.get('/node_modules/escape-html/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/escape-html/LICENSE'));
	console.log('Got request for /node_modules/escape-html/LICENSE ... ');
});


app.get('/node_modules/escape-html/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/escape-html/package.json'));
	console.log('Got request for /node_modules/escape-html/package.json ... ');
});


app.get('/node_modules/mime-types/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-types/HISTORY.md'));
	console.log('Got request for /node_modules/mime-types/HISTORY.md ... ');
});


app.get('/node_modules/mime-types/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-types/index.js'));
	console.log('Got request for /node_modules/mime-types/index.js ... ');
});


app.get('/node_modules/mime-types/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-types/LICENSE'));
	console.log('Got request for /node_modules/mime-types/LICENSE ... ');
});


app.get('/node_modules/mime-types/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-types/package.json'));
	console.log('Got request for /node_modules/mime-types/package.json ... ');
});


app.get('/node_modules/mime-types/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-types/README.md'));
	console.log('Got request for /node_modules/mime-types/README.md ... ');
});


app.get('/node_modules/vary/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/vary/HISTORY.md'));
	console.log('Got request for /node_modules/vary/HISTORY.md ... ');
});


app.get('/node_modules/vary/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/vary/index.js'));
	console.log('Got request for /node_modules/vary/index.js ... ');
});


app.get('/node_modules/vary/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/vary/LICENSE'));
	console.log('Got request for /node_modules/vary/LICENSE ... ');
});


app.get('/node_modules/vary/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/vary/package.json'));
	console.log('Got request for /node_modules/vary/package.json ... ');
});


app.get('/node_modules/vary/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/vary/README.md'));
	console.log('Got request for /node_modules/vary/README.md ... ');
});


app.get('/node_modules/toidentifier/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/toidentifier/index.js'));
	console.log('Got request for /node_modules/toidentifier/index.js ... ');
});


app.get('/node_modules/toidentifier/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/toidentifier/LICENSE'));
	console.log('Got request for /node_modules/toidentifier/LICENSE ... ');
});


app.get('/node_modules/toidentifier/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/toidentifier/package.json'));
	console.log('Got request for /node_modules/toidentifier/package.json ... ');
});


app.get('/node_modules/toidentifier/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/toidentifier/README.md'));
	console.log('Got request for /node_modules/toidentifier/README.md ... ');
});


app.get('/node_modules/on-finished/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/on-finished/HISTORY.md'));
	console.log('Got request for /node_modules/on-finished/HISTORY.md ... ');
});


app.get('/node_modules/on-finished/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/on-finished/index.js'));
	console.log('Got request for /node_modules/on-finished/index.js ... ');
});


app.get('/node_modules/on-finished/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/on-finished/LICENSE'));
	console.log('Got request for /node_modules/on-finished/LICENSE ... ');
});


app.get('/node_modules/on-finished/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/on-finished/package.json'));
	console.log('Got request for /node_modules/on-finished/package.json ... ');
});


app.get('/node_modules/on-finished/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/on-finished/README.md'));
	console.log('Got request for /node_modules/on-finished/README.md ... ');
});


app.get('/node_modules/qs/CHANGELOG.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/CHANGELOG.md'));
	console.log('Got request for /node_modules/qs/CHANGELOG.md ... ');
});


app.get('/node_modules/qs/.eslintignore', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/.eslintignore'));
	console.log('Got request for /node_modules/qs/.eslintignore ... ');
});


app.get('/node_modules/qs/.editorconfig', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/.editorconfig'));
	console.log('Got request for /node_modules/qs/.editorconfig ... ');
});


app.get('/node_modules/qs/lib/parse.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/lib/parse.js'));
	console.log('Got request for /node_modules/qs/lib/parse.js ... ');
});


app.get('/node_modules/qs/lib/utils.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/lib/utils.js'));
	console.log('Got request for /node_modules/qs/lib/utils.js ... ');
});


app.get('/node_modules/qs/lib/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/lib/index.js'));
	console.log('Got request for /node_modules/qs/lib/index.js ... ');
});


app.get('/node_modules/qs/lib/stringify.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/lib/stringify.js'));
	console.log('Got request for /node_modules/qs/lib/stringify.js ... ');
});


app.get('/node_modules/qs/lib/formats.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/lib/formats.js'));
	console.log('Got request for /node_modules/qs/lib/formats.js ... ');
});


app.get('/node_modules/qs/dist/qs.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/dist/qs.js'));
	console.log('Got request for /node_modules/qs/dist/qs.js ... ');
});


app.get('/node_modules/qs/.eslintrc', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/.eslintrc'));
	console.log('Got request for /node_modules/qs/.eslintrc ... ');
});


app.get('/node_modules/qs/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/LICENSE'));
	console.log('Got request for /node_modules/qs/LICENSE ... ');
});


app.get('/node_modules/qs/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/package.json'));
	console.log('Got request for /node_modules/qs/package.json ... ');
});


app.get('/node_modules/qs/test/parse.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/test/parse.js'));
	console.log('Got request for /node_modules/qs/test/parse.js ... ');
});


app.get('/node_modules/qs/test/utils.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/test/utils.js'));
	console.log('Got request for /node_modules/qs/test/utils.js ... ');
});


app.get('/node_modules/qs/test/.eslintrc', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/test/.eslintrc'));
	console.log('Got request for /node_modules/qs/test/.eslintrc ... ');
});


app.get('/node_modules/qs/test/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/test/index.js'));
	console.log('Got request for /node_modules/qs/test/index.js ... ');
});


app.get('/node_modules/qs/test/stringify.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/test/stringify.js'));
	console.log('Got request for /node_modules/qs/test/stringify.js ... ');
});


app.get('/node_modules/qs/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/qs/README.md'));
	console.log('Got request for /node_modules/qs/README.md ... ');
});


app.get('/node_modules/http-errors/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/http-errors/HISTORY.md'));
	console.log('Got request for /node_modules/http-errors/HISTORY.md ... ');
});


app.get('/node_modules/http-errors/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/http-errors/index.js'));
	console.log('Got request for /node_modules/http-errors/index.js ... ');
});


app.get('/node_modules/http-errors/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/http-errors/LICENSE'));
	console.log('Got request for /node_modules/http-errors/LICENSE ... ');
});


app.get('/node_modules/http-errors/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/http-errors/package.json'));
	console.log('Got request for /node_modules/http-errors/package.json ... ');
});


app.get('/node_modules/http-errors/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/http-errors/README.md'));
	console.log('Got request for /node_modules/http-errors/README.md ... ');
});


app.get('/node_modules/utils-merge/.npmignore', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/utils-merge/.npmignore'));
	console.log('Got request for /node_modules/utils-merge/.npmignore ... ');
});


app.get('/node_modules/utils-merge/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/utils-merge/index.js'));
	console.log('Got request for /node_modules/utils-merge/index.js ... ');
});


app.get('/node_modules/utils-merge/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/utils-merge/LICENSE'));
	console.log('Got request for /node_modules/utils-merge/LICENSE ... ');
});


app.get('/node_modules/utils-merge/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/utils-merge/package.json'));
	console.log('Got request for /node_modules/utils-merge/package.json ... ');
});


app.get('/node_modules/utils-merge/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/utils-merge/README.md'));
	console.log('Got request for /node_modules/utils-merge/README.md ... ');
});


app.get('/node_modules/etag/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/etag/HISTORY.md'));
	console.log('Got request for /node_modules/etag/HISTORY.md ... ');
});


app.get('/node_modules/etag/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/etag/index.js'));
	console.log('Got request for /node_modules/etag/index.js ... ');
});


app.get('/node_modules/etag/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/etag/LICENSE'));
	console.log('Got request for /node_modules/etag/LICENSE ... ');
});


app.get('/node_modules/etag/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/etag/package.json'));
	console.log('Got request for /node_modules/etag/package.json ... ');
});


app.get('/node_modules/etag/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/etag/README.md'));
	console.log('Got request for /node_modules/etag/README.md ... ');
});


app.get('/node_modules/forwarded/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/forwarded/HISTORY.md'));
	console.log('Got request for /node_modules/forwarded/HISTORY.md ... ');
});


app.get('/node_modules/forwarded/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/forwarded/index.js'));
	console.log('Got request for /node_modules/forwarded/index.js ... ');
});


app.get('/node_modules/forwarded/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/forwarded/LICENSE'));
	console.log('Got request for /node_modules/forwarded/LICENSE ... ');
});


app.get('/node_modules/forwarded/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/forwarded/package.json'));
	console.log('Got request for /node_modules/forwarded/package.json ... ');
});


app.get('/node_modules/forwarded/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/forwarded/README.md'));
	console.log('Got request for /node_modules/forwarded/README.md ... ');
});


app.get('/node_modules/debug/CHANGELOG.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/CHANGELOG.md'));
	console.log('Got request for /node_modules/debug/CHANGELOG.md ... ');
});


app.get('/node_modules/debug/component.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/component.json'));
	console.log('Got request for /node_modules/debug/component.json ... ');
});


app.get('/node_modules/debug/.npmignore', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/.npmignore'));
	console.log('Got request for /node_modules/debug/.npmignore ... ');
});


app.get('/node_modules/debug/.travis.yml', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/.travis.yml'));
	console.log('Got request for /node_modules/debug/.travis.yml ... ');
});


app.get('/node_modules/debug/Makefile', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/Makefile'));
	console.log('Got request for /node_modules/debug/Makefile ... ');
});


app.get('/node_modules/debug/.eslintrc', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/.eslintrc'));
	console.log('Got request for /node_modules/debug/.eslintrc ... ');
});


app.get('/node_modules/debug/.coveralls.yml', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/.coveralls.yml'));
	console.log('Got request for /node_modules/debug/.coveralls.yml ... ');
});


app.get('/node_modules/debug/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/LICENSE'));
	console.log('Got request for /node_modules/debug/LICENSE ... ');
});


app.get('/node_modules/debug/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/package.json'));
	console.log('Got request for /node_modules/debug/package.json ... ');
});


app.get('/node_modules/debug/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/README.md'));
	console.log('Got request for /node_modules/debug/README.md ... ');
});


app.get('/node_modules/debug/src/debug.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/src/debug.js'));
	console.log('Got request for /node_modules/debug/src/debug.js ... ');
});


app.get('/node_modules/debug/src/browser.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/src/browser.js'));
	console.log('Got request for /node_modules/debug/src/browser.js ... ');
});


app.get('/node_modules/debug/src/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/src/index.js'));
	console.log('Got request for /node_modules/debug/src/index.js ... ');
});


app.get('/node_modules/debug/src/inspector-log.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/src/inspector-log.js'));
	console.log('Got request for /node_modules/debug/src/inspector-log.js ... ');
});


app.get('/node_modules/debug/src/node.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/src/node.js'));
	console.log('Got request for /node_modules/debug/src/node.js ... ');
});


app.get('/node_modules/debug/node.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/node.js'));
	console.log('Got request for /node_modules/debug/node.js ... ');
});


app.get('/node_modules/debug/karma.conf.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/debug/karma.conf.js'));
	console.log('Got request for /node_modules/debug/karma.conf.js ... ');
});


app.get('/node_modules/mime-db/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-db/HISTORY.md'));
	console.log('Got request for /node_modules/mime-db/HISTORY.md ... ');
});


app.get('/node_modules/mime-db/db.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-db/db.json'));
	console.log('Got request for /node_modules/mime-db/db.json ... ');
});


app.get('/node_modules/mime-db/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-db/index.js'));
	console.log('Got request for /node_modules/mime-db/index.js ... ');
});


app.get('/node_modules/mime-db/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-db/LICENSE'));
	console.log('Got request for /node_modules/mime-db/LICENSE ... ');
});


app.get('/node_modules/mime-db/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-db/package.json'));
	console.log('Got request for /node_modules/mime-db/package.json ... ');
});


app.get('/node_modules/mime-db/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/mime-db/README.md'));
	console.log('Got request for /node_modules/mime-db/README.md ... ');
});


app.get('/node_modules/setprototypeof/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/setprototypeof/index.js'));
	console.log('Got request for /node_modules/setprototypeof/index.js ... ');
});


app.get('/node_modules/setprototypeof/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/setprototypeof/LICENSE'));
	console.log('Got request for /node_modules/setprototypeof/LICENSE ... ');
});


app.get('/node_modules/setprototypeof/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/setprototypeof/package.json'));
	console.log('Got request for /node_modules/setprototypeof/package.json ... ');
});


app.get('/node_modules/setprototypeof/test/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/setprototypeof/test/index.js'));
	console.log('Got request for /node_modules/setprototypeof/test/index.js ... ');
});


app.get('/node_modules/setprototypeof/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/setprototypeof/README.md'));
	console.log('Got request for /node_modules/setprototypeof/README.md ... ');
});


app.get('/node_modules/setprototypeof/index.d.ts', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/setprototypeof/index.d.ts'));
	console.log('Got request for /node_modules/setprototypeof/index.d.ts ... ');
});


app.get('/node_modules/statuses/codes.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/statuses/codes.json'));
	console.log('Got request for /node_modules/statuses/codes.json ... ');
});


app.get('/node_modules/statuses/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/statuses/HISTORY.md'));
	console.log('Got request for /node_modules/statuses/HISTORY.md ... ');
});


app.get('/node_modules/statuses/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/statuses/index.js'));
	console.log('Got request for /node_modules/statuses/index.js ... ');
});


app.get('/node_modules/statuses/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/statuses/LICENSE'));
	console.log('Got request for /node_modules/statuses/LICENSE ... ');
});


app.get('/node_modules/statuses/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/statuses/package.json'));
	console.log('Got request for /node_modules/statuses/package.json ... ');
});


app.get('/node_modules/statuses/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/statuses/README.md'));
	console.log('Got request for /node_modules/statuses/README.md ... ');
});


app.get('/node_modules/raw-body/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/raw-body/HISTORY.md'));
	console.log('Got request for /node_modules/raw-body/HISTORY.md ... ');
});


app.get('/node_modules/raw-body/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/raw-body/index.js'));
	console.log('Got request for /node_modules/raw-body/index.js ... ');
});


app.get('/node_modules/raw-body/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/raw-body/LICENSE'));
	console.log('Got request for /node_modules/raw-body/LICENSE ... ');
});


app.get('/node_modules/raw-body/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/raw-body/package.json'));
	console.log('Got request for /node_modules/raw-body/package.json ... ');
});


app.get('/node_modules/raw-body/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/raw-body/README.md'));
	console.log('Got request for /node_modules/raw-body/README.md ... ');
});


app.get('/node_modules/raw-body/index.d.ts', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/raw-body/index.d.ts'));
	console.log('Got request for /node_modules/raw-body/index.d.ts ... ');
});


app.get('/node_modules/path-to-regexp/Readme.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/path-to-regexp/Readme.md'));
	console.log('Got request for /node_modules/path-to-regexp/Readme.md ... ');
});


app.get('/node_modules/path-to-regexp/History.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/path-to-regexp/History.md'));
	console.log('Got request for /node_modules/path-to-regexp/History.md ... ');
});


app.get('/node_modules/path-to-regexp/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/path-to-regexp/index.js'));
	console.log('Got request for /node_modules/path-to-regexp/index.js ... ');
});


app.get('/node_modules/path-to-regexp/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/path-to-regexp/LICENSE'));
	console.log('Got request for /node_modules/path-to-regexp/LICENSE ... ');
});


app.get('/node_modules/path-to-regexp/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/path-to-regexp/package.json'));
	console.log('Got request for /node_modules/path-to-regexp/package.json ... ');
});


app.get('/node_modules/safer-buffer/Readme.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safer-buffer/Readme.md'));
	console.log('Got request for /node_modules/safer-buffer/Readme.md ... ');
});


app.get('/node_modules/safer-buffer/dangerous.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safer-buffer/dangerous.js'));
	console.log('Got request for /node_modules/safer-buffer/dangerous.js ... ');
});


app.get('/node_modules/safer-buffer/tests.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safer-buffer/tests.js'));
	console.log('Got request for /node_modules/safer-buffer/tests.js ... ');
});


app.get('/node_modules/safer-buffer/Porting-Buffer.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safer-buffer/Porting-Buffer.md'));
	console.log('Got request for /node_modules/safer-buffer/Porting-Buffer.md ... ');
});


app.get('/node_modules/safer-buffer/safer.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safer-buffer/safer.js'));
	console.log('Got request for /node_modules/safer-buffer/safer.js ... ');
});


app.get('/node_modules/safer-buffer/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safer-buffer/LICENSE'));
	console.log('Got request for /node_modules/safer-buffer/LICENSE ... ');
});


app.get('/node_modules/safer-buffer/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safer-buffer/package.json'));
	console.log('Got request for /node_modules/safer-buffer/package.json ... ');
});


app.get('/node_modules/fresh/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/fresh/HISTORY.md'));
	console.log('Got request for /node_modules/fresh/HISTORY.md ... ');
});


app.get('/node_modules/fresh/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/fresh/index.js'));
	console.log('Got request for /node_modules/fresh/index.js ... ');
});


app.get('/node_modules/fresh/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/fresh/LICENSE'));
	console.log('Got request for /node_modules/fresh/LICENSE ... ');
});


app.get('/node_modules/fresh/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/fresh/package.json'));
	console.log('Got request for /node_modules/fresh/package.json ... ');
});


app.get('/node_modules/fresh/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/fresh/README.md'));
	console.log('Got request for /node_modules/fresh/README.md ... ');
});


app.get('/node_modules/destroy/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/destroy/index.js'));
	console.log('Got request for /node_modules/destroy/index.js ... ');
});


app.get('/node_modules/destroy/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/destroy/LICENSE'));
	console.log('Got request for /node_modules/destroy/LICENSE ... ');
});


app.get('/node_modules/destroy/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/destroy/package.json'));
	console.log('Got request for /node_modules/destroy/package.json ... ');
});


app.get('/node_modules/destroy/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/destroy/README.md'));
	console.log('Got request for /node_modules/destroy/README.md ... ');
});


app.get('/node_modules/type-is/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/type-is/HISTORY.md'));
	console.log('Got request for /node_modules/type-is/HISTORY.md ... ');
});


app.get('/node_modules/type-is/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/type-is/index.js'));
	console.log('Got request for /node_modules/type-is/index.js ... ');
});


app.get('/node_modules/type-is/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/type-is/LICENSE'));
	console.log('Got request for /node_modules/type-is/LICENSE ... ');
});


app.get('/node_modules/type-is/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/type-is/package.json'));
	console.log('Got request for /node_modules/type-is/package.json ... ');
});


app.get('/node_modules/type-is/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/type-is/README.md'));
	console.log('Got request for /node_modules/type-is/README.md ... ');
});


app.get('/node_modules/iconv-lite/lib/extend-node.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/lib/extend-node.js'));
	console.log('Got request for /node_modules/iconv-lite/lib/extend-node.js ... ');
});


app.get('/node_modules/iconv-lite/lib/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/lib/index.js'));
	console.log('Got request for /node_modules/iconv-lite/lib/index.js ... ');
});


app.get('/node_modules/iconv-lite/lib/bom-handling.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/lib/bom-handling.js'));
	console.log('Got request for /node_modules/iconv-lite/lib/bom-handling.js ... ');
});


app.get('/node_modules/iconv-lite/lib/streams.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/lib/streams.js'));
	console.log('Got request for /node_modules/iconv-lite/lib/streams.js ... ');
});


app.get('/node_modules/iconv-lite/lib/index.d.ts', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/lib/index.d.ts'));
	console.log('Got request for /node_modules/iconv-lite/lib/index.d.ts ... ');
});


app.get('/node_modules/iconv-lite/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/LICENSE'));
	console.log('Got request for /node_modules/iconv-lite/LICENSE ... ');
});


app.get('/node_modules/iconv-lite/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/package.json'));
	console.log('Got request for /node_modules/iconv-lite/package.json ... ');
});


app.get('/node_modules/iconv-lite/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/README.md'));
	console.log('Got request for /node_modules/iconv-lite/README.md ... ');
});


app.get('/node_modules/iconv-lite/encodings/tables/gb18030-ranges.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/tables/gb18030-ranges.json'));
	console.log('Got request for /node_modules/iconv-lite/encodings/tables/gb18030-ranges.json ... ');
});


app.get('/node_modules/iconv-lite/encodings/tables/gbk-added.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/tables/gbk-added.json'));
	console.log('Got request for /node_modules/iconv-lite/encodings/tables/gbk-added.json ... ');
});


app.get('/node_modules/iconv-lite/encodings/tables/cp950.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/tables/cp950.json'));
	console.log('Got request for /node_modules/iconv-lite/encodings/tables/cp950.json ... ');
});


app.get('/node_modules/iconv-lite/encodings/tables/shiftjis.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/tables/shiftjis.json'));
	console.log('Got request for /node_modules/iconv-lite/encodings/tables/shiftjis.json ... ');
});


app.get('/node_modules/iconv-lite/encodings/tables/big5-added.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/tables/big5-added.json'));
	console.log('Got request for /node_modules/iconv-lite/encodings/tables/big5-added.json ... ');
});


app.get('/node_modules/iconv-lite/encodings/tables/cp949.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/tables/cp949.json'));
	console.log('Got request for /node_modules/iconv-lite/encodings/tables/cp949.json ... ');
});


app.get('/node_modules/iconv-lite/encodings/tables/cp936.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/tables/cp936.json'));
	console.log('Got request for /node_modules/iconv-lite/encodings/tables/cp936.json ... ');
});


app.get('/node_modules/iconv-lite/encodings/tables/eucjp.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/tables/eucjp.json'));
	console.log('Got request for /node_modules/iconv-lite/encodings/tables/eucjp.json ... ');
});


app.get('/node_modules/iconv-lite/encodings/dbcs-codec.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/dbcs-codec.js'));
	console.log('Got request for /node_modules/iconv-lite/encodings/dbcs-codec.js ... ');
});


app.get('/node_modules/iconv-lite/encodings/sbcs-codec.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/sbcs-codec.js'));
	console.log('Got request for /node_modules/iconv-lite/encodings/sbcs-codec.js ... ');
});


app.get('/node_modules/iconv-lite/encodings/internal.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/internal.js'));
	console.log('Got request for /node_modules/iconv-lite/encodings/internal.js ... ');
});


app.get('/node_modules/iconv-lite/encodings/sbcs-data.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/sbcs-data.js'));
	console.log('Got request for /node_modules/iconv-lite/encodings/sbcs-data.js ... ');
});


app.get('/node_modules/iconv-lite/encodings/utf7.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/utf7.js'));
	console.log('Got request for /node_modules/iconv-lite/encodings/utf7.js ... ');
});


app.get('/node_modules/iconv-lite/encodings/dbcs-data.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/dbcs-data.js'));
	console.log('Got request for /node_modules/iconv-lite/encodings/dbcs-data.js ... ');
});


app.get('/node_modules/iconv-lite/encodings/utf16.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/utf16.js'));
	console.log('Got request for /node_modules/iconv-lite/encodings/utf16.js ... ');
});


app.get('/node_modules/iconv-lite/encodings/sbcs-data-generated.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/sbcs-data-generated.js'));
	console.log('Got request for /node_modules/iconv-lite/encodings/sbcs-data-generated.js ... ');
});


app.get('/node_modules/iconv-lite/encodings/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/encodings/index.js'));
	console.log('Got request for /node_modules/iconv-lite/encodings/index.js ... ');
});


app.get('/node_modules/iconv-lite/Changelog.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/iconv-lite/Changelog.md'));
	console.log('Got request for /node_modules/iconv-lite/Changelog.md ... ');
});


app.get('/node_modules/inherits/inherits_browser.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/inherits/inherits_browser.js'));
	console.log('Got request for /node_modules/inherits/inherits_browser.js ... ');
});


app.get('/node_modules/inherits/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/inherits/LICENSE'));
	console.log('Got request for /node_modules/inherits/LICENSE ... ');
});


app.get('/node_modules/inherits/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/inherits/package.json'));
	console.log('Got request for /node_modules/inherits/package.json ... ');
});


app.get('/node_modules/inherits/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/inherits/README.md'));
	console.log('Got request for /node_modules/inherits/README.md ... ');
});


app.get('/node_modules/inherits/inherits.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/inherits/inherits.js'));
	console.log('Got request for /node_modules/inherits/inherits.js ... ');
});


app.get('/node_modules/encodeurl/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/encodeurl/HISTORY.md'));
	console.log('Got request for /node_modules/encodeurl/HISTORY.md ... ');
});


app.get('/node_modules/encodeurl/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/encodeurl/index.js'));
	console.log('Got request for /node_modules/encodeurl/index.js ... ');
});


app.get('/node_modules/encodeurl/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/encodeurl/LICENSE'));
	console.log('Got request for /node_modules/encodeurl/LICENSE ... ');
});


app.get('/node_modules/encodeurl/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/encodeurl/package.json'));
	console.log('Got request for /node_modules/encodeurl/package.json ... ');
});


app.get('/node_modules/encodeurl/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/encodeurl/README.md'));
	console.log('Got request for /node_modules/encodeurl/README.md ... ');
});


app.get('/node_modules/parseurl/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/parseurl/HISTORY.md'));
	console.log('Got request for /node_modules/parseurl/HISTORY.md ... ');
});


app.get('/node_modules/parseurl/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/parseurl/index.js'));
	console.log('Got request for /node_modules/parseurl/index.js ... ');
});


app.get('/node_modules/parseurl/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/parseurl/LICENSE'));
	console.log('Got request for /node_modules/parseurl/LICENSE ... ');
});


app.get('/node_modules/parseurl/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/parseurl/package.json'));
	console.log('Got request for /node_modules/parseurl/package.json ... ');
});


app.get('/node_modules/parseurl/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/parseurl/README.md'));
	console.log('Got request for /node_modules/parseurl/README.md ... ');
});


app.get('/node_modules/safe-buffer/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safe-buffer/index.js'));
	console.log('Got request for /node_modules/safe-buffer/index.js ... ');
});


app.get('/node_modules/safe-buffer/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safe-buffer/LICENSE'));
	console.log('Got request for /node_modules/safe-buffer/LICENSE ... ');
});


app.get('/node_modules/safe-buffer/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safe-buffer/package.json'));
	console.log('Got request for /node_modules/safe-buffer/package.json ... ');
});


app.get('/node_modules/safe-buffer/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safe-buffer/README.md'));
	console.log('Got request for /node_modules/safe-buffer/README.md ... ');
});


app.get('/node_modules/safe-buffer/index.d.ts', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/safe-buffer/index.d.ts'));
	console.log('Got request for /node_modules/safe-buffer/index.d.ts ... ');
});


app.get('/node_modules/cookie-signature/Readme.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie-signature/Readme.md'));
	console.log('Got request for /node_modules/cookie-signature/Readme.md ... ');
});


app.get('/node_modules/cookie-signature/.npmignore', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie-signature/.npmignore'));
	console.log('Got request for /node_modules/cookie-signature/.npmignore ... ');
});


app.get('/node_modules/cookie-signature/History.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie-signature/History.md'));
	console.log('Got request for /node_modules/cookie-signature/History.md ... ');
});


app.get('/node_modules/cookie-signature/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie-signature/index.js'));
	console.log('Got request for /node_modules/cookie-signature/index.js ... ');
});


app.get('/node_modules/cookie-signature/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/cookie-signature/package.json'));
	console.log('Got request for /node_modules/cookie-signature/package.json ... ');
});


app.get('/node_modules/ee-first/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ee-first/index.js'));
	console.log('Got request for /node_modules/ee-first/index.js ... ');
});


app.get('/node_modules/ee-first/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ee-first/LICENSE'));
	console.log('Got request for /node_modules/ee-first/LICENSE ... ');
});


app.get('/node_modules/ee-first/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ee-first/package.json'));
	console.log('Got request for /node_modules/ee-first/package.json ... ');
});


app.get('/node_modules/ee-first/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ee-first/README.md'));
	console.log('Got request for /node_modules/ee-first/README.md ... ');
});


app.get('/node_modules/array-flatten/array-flatten.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/array-flatten/array-flatten.js'));
	console.log('Got request for /node_modules/array-flatten/array-flatten.js ... ');
});


app.get('/node_modules/array-flatten/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/array-flatten/LICENSE'));
	console.log('Got request for /node_modules/array-flatten/LICENSE ... ');
});


app.get('/node_modules/array-flatten/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/array-flatten/package.json'));
	console.log('Got request for /node_modules/array-flatten/package.json ... ');
});


app.get('/node_modules/array-flatten/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/array-flatten/README.md'));
	console.log('Got request for /node_modules/array-flatten/README.md ... ');
});


app.get('/node_modules/serve-static/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/serve-static/HISTORY.md'));
	console.log('Got request for /node_modules/serve-static/HISTORY.md ... ');
});


app.get('/node_modules/serve-static/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/serve-static/index.js'));
	console.log('Got request for /node_modules/serve-static/index.js ... ');
});


app.get('/node_modules/serve-static/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/serve-static/LICENSE'));
	console.log('Got request for /node_modules/serve-static/LICENSE ... ');
});


app.get('/node_modules/serve-static/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/serve-static/package.json'));
	console.log('Got request for /node_modules/serve-static/package.json ... ');
});


app.get('/node_modules/serve-static/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/serve-static/README.md'));
	console.log('Got request for /node_modules/serve-static/README.md ... ');
});


app.get('/node_modules/bytes/Readme.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/bytes/Readme.md'));
	console.log('Got request for /node_modules/bytes/Readme.md ... ');
});


app.get('/node_modules/bytes/History.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/bytes/History.md'));
	console.log('Got request for /node_modules/bytes/History.md ... ');
});


app.get('/node_modules/bytes/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/bytes/index.js'));
	console.log('Got request for /node_modules/bytes/index.js ... ');
});


app.get('/node_modules/bytes/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/bytes/LICENSE'));
	console.log('Got request for /node_modules/bytes/LICENSE ... ');
});


app.get('/node_modules/bytes/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/bytes/package.json'));
	console.log('Got request for /node_modules/bytes/package.json ... ');
});


app.get('/node_modules/negotiator/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/negotiator/HISTORY.md'));
	console.log('Got request for /node_modules/negotiator/HISTORY.md ... ');
});


app.get('/node_modules/negotiator/lib/language.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/negotiator/lib/language.js'));
	console.log('Got request for /node_modules/negotiator/lib/language.js ... ');
});


app.get('/node_modules/negotiator/lib/mediaType.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/negotiator/lib/mediaType.js'));
	console.log('Got request for /node_modules/negotiator/lib/mediaType.js ... ');
});


app.get('/node_modules/negotiator/lib/encoding.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/negotiator/lib/encoding.js'));
	console.log('Got request for /node_modules/negotiator/lib/encoding.js ... ');
});


app.get('/node_modules/negotiator/lib/charset.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/negotiator/lib/charset.js'));
	console.log('Got request for /node_modules/negotiator/lib/charset.js ... ');
});


app.get('/node_modules/negotiator/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/negotiator/index.js'));
	console.log('Got request for /node_modules/negotiator/index.js ... ');
});


app.get('/node_modules/negotiator/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/negotiator/LICENSE'));
	console.log('Got request for /node_modules/negotiator/LICENSE ... ');
});


app.get('/node_modules/negotiator/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/negotiator/package.json'));
	console.log('Got request for /node_modules/negotiator/package.json ... ');
});


app.get('/node_modules/negotiator/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/negotiator/README.md'));
	console.log('Got request for /node_modules/negotiator/README.md ... ');
});


app.get('/node_modules/methods/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/methods/HISTORY.md'));
	console.log('Got request for /node_modules/methods/HISTORY.md ... ');
});


app.get('/node_modules/methods/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/methods/index.js'));
	console.log('Got request for /node_modules/methods/index.js ... ');
});


app.get('/node_modules/methods/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/methods/LICENSE'));
	console.log('Got request for /node_modules/methods/LICENSE ... ');
});


app.get('/node_modules/methods/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/methods/package.json'));
	console.log('Got request for /node_modules/methods/package.json ... ');
});


app.get('/node_modules/methods/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/methods/README.md'));
	console.log('Got request for /node_modules/methods/README.md ... ');
});


app.get('/node_modules/unpipe/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/unpipe/HISTORY.md'));
	console.log('Got request for /node_modules/unpipe/HISTORY.md ... ');
});


app.get('/node_modules/unpipe/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/unpipe/index.js'));
	console.log('Got request for /node_modules/unpipe/index.js ... ');
});


app.get('/node_modules/unpipe/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/unpipe/LICENSE'));
	console.log('Got request for /node_modules/unpipe/LICENSE ... ');
});


app.get('/node_modules/unpipe/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/unpipe/package.json'));
	console.log('Got request for /node_modules/unpipe/package.json ... ');
});


app.get('/node_modules/unpipe/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/unpipe/README.md'));
	console.log('Got request for /node_modules/unpipe/README.md ... ');
});


app.get('/node_modules/ms/readme.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ms/readme.md'));
	console.log('Got request for /node_modules/ms/readme.md ... ');
});


app.get('/node_modules/ms/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ms/index.js'));
	console.log('Got request for /node_modules/ms/index.js ... ');
});


app.get('/node_modules/ms/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ms/package.json'));
	console.log('Got request for /node_modules/ms/package.json ... ');
});


app.get('/node_modules/ms/license.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/ms/license.md'));
	console.log('Got request for /node_modules/ms/license.md ... ');
});


app.get('/node_modules/content-disposition/HISTORY.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-disposition/HISTORY.md'));
	console.log('Got request for /node_modules/content-disposition/HISTORY.md ... ');
});


app.get('/node_modules/content-disposition/index.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-disposition/index.js'));
	console.log('Got request for /node_modules/content-disposition/index.js ... ');
});


app.get('/node_modules/content-disposition/LICENSE', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-disposition/LICENSE'));
	console.log('Got request for /node_modules/content-disposition/LICENSE ... ');
});


app.get('/node_modules/content-disposition/package.json', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-disposition/package.json'));
	console.log('Got request for /node_modules/content-disposition/package.json ... ');
});


app.get('/node_modules/content-disposition/README.md', (req, res) => {
	res.sendFile(path.join(__dirname + '/node_modules/content-disposition/README.md'));
	console.log('Got request for /node_modules/content-disposition/README.md ... ');
});


app.listen(80, console.log('Server listening on port 80'));