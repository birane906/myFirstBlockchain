class Block{

    constructor(prevHash, txs, nonce){
        this.prevHash = prevHash;
        this.txs = txs;
        this.nonce = nonce;
        this.time = Date.now()
    }

    getHash(){
        return this.prevHash + this.getMerkleHash() + this.nonce + this.time + '';
    }

    getMerkleHash(){
        return this.txs.toString();
    }

}


class Blochchain{
    
    constructor(genesisBlock){
        this.blocks = new Array();
        this.blocks[genesisBlock.getHash()] = genesisBlock;
    }

    mineBlock(){
        let nonce = Math.floor(Math.random() * 1000) + 1;
        let block = new Block(this.getLastBlock(),['1','2'], nonce);
        this.blocks[block.getHash()] = block;
    }

    getLastBlock(){
        let key = Object.keys(this.blocks)[Object.keys(this.blocks).length - 1];
        return this.blocks[key];
    }


}