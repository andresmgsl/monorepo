use anchor_lang::prelude::*;

declare_id!("4fiGdGpGV148wm5JyksaQYc3YrpkTbGkbh772N42TUHQ");

#[program]
pub mod Zooland {
    use super::*;

    pub fn say_hello(ctx: Context<SayHello>) -> ProgramResult {
        // To implement
    }
}

#[account]
pub struct Zooland {
    pub authority: Pubkey,
    pub count: u64,
    pub name: [u8; 32],
}

#[account]
pub struct LaNuevaPapa {
    pub authority: Pubkey,
    pub bump: u8,
    pub application: Pubkey,

}
#[account]
pub struct Animals {
    pub authority: Pubkey,
    pub bump: u8,
    pub application: Pubkey,

    pub : ,
    pub : ,
}
#[account]
pub struct Staff {
    pub authority: Pubkey,
    pub bump: u8,
    pub application: Pubkey,

    pub : ,
}

#[derive(Accounts)]
#[instruction()]
pub struct SayHello<'info>{
    #[account(
        init
    )]
    pub application: Box<Account<'info, Application>>,
    #[account(mut)]
    pub collection: Box<Account<'info, Collection>>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>

    //TODO
}

