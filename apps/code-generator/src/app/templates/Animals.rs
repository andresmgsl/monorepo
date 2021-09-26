use anchor_lang::prelude::*;

declare_id!("98Pa3oCeSHusR2KRDNP7qswDA5BHeL3Bd8PmHNoLPMkw");

#[program]
pub mod [object Object] {
    use super::*;

    pub fn say_hello(ctx: Context<SayHello>,) -> ProgramResult {
        // To implement
    }
    pub fn duplicate(ctx: Context<Duplicate>,ExtraData:[u32: 32],NewName:u32,NewCategory:u32,) -> ProgramResult {
        // To implement
    }
    pub fn delete(ctx: Context<Delete>,) -> ProgramResult {
        // To implement
    }
}

#[account]
pub struct Animals {
    pub authority: Pubkey,
    pub count: u64,
    pub name: [u8; 32],
}

#[account]
pub struct User {
    pub authority: Pubkey,
    pub bump: u8,
    pub application: Pubkey,

    pub name: u32,
    pub phones: [u32: 4],
}

#[derive(Accounts)]
#[instruction()]
pub struct SayHello<'info>{
    #[account(
        init
    )]
    //TODO
}
#[account]
pub struct Task {
    pub authority: Pubkey,
    pub bump: u8,
    pub application: Pubkey,

    pub name: u32,
    pub category: u32,
}

#[derive(Accounts)]
#[instruction(extra_data:[u32: 32],new_name:u32,new_category:u32,)]
pub struct Duplicate<'info>{
    #[account(
        init
    )]
    //TODO
}

#[derive(Accounts)]
#[instruction()]
pub struct Delete<'info>{
    #[account(
        init
    )]
    //TODO
}
